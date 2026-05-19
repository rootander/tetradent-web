<?php
/**
 * Class Ajax_Contact_Form
 *
 * Class to send emails using ajax
 *
 * @author:    nK <https://nkdev.info>
 * @link       https://github.com/nk-o/ajax-contact-form
 * @version    1.0.0
 * @license    MIT License
 */
class Ajax_Contact_Form {
    /**
     * Message destination email.
     *
     * @var string
     */
    protected $address_destination = 'informes@tetradent.pe';

    /**
     * Message subject
     *
     * @var string
     */
    protected $message_subject = 'Mensaje desde la página';

    /**
     * Strings to translate or change it.
     *
     * @var array
     */
    protected $strings = array(
        'body'              => '
            <h1>{{subject}}</h1>
            <p><strong>De:</strong> {{name}}</p>
            <p><strong>E-Mail:</strong> {{email}}</p>
            <p><strong>Teléfono:</strong> {{phone}}</p>
            <p><strong>Cita:</strong> {{date}}</p>
            <p><strong>Mensaje:</strong> <br> {{message}}</p>',
        'success'           => '<h3>Su mensaje fue enviado!!</h3><p>En breve nos pondremos en contacto.</p>',
        'error'             => '<h3>Error al enviar</h3><p>Actualice la página e inténtelo nuevamente.</p>',
        'demo'              => 'Este es un mensaje de demostración desde PHP',
        'header_injection'  => 'Inyección de encabezado detectado.',
        'enter_name'        => 'Por favor, escribe tu nombre.',
        'enter_email'       => 'Por favor, escribe un e-mail válido.',
        'enter_message'     => 'Por favor, escriba su mensaje.',
        'ajax_only'         => 'Solo se permite XMLHttpRequest.',
    );

    /**
     * Demo mode, will return always success and demo message without email send.
     *
     * @var bool
     */
    protected $demo = false;

    /**
     * nK_Contact_Form constructor.
     */
    public function __construct() {
        // Demo message.
        if ( $this->demo ) {
            $this->successHandler('demo');
        }

        // Ajax check.
        if ( ! isset( $_SERVER['HTTP_X_REQUESTED_WITH'] ) || 'XMLHttpRequest' !== $_SERVER['HTTP_X_REQUESTED_WITH'] ) {
            $this->errorHandler('ajax_only');
        }

        // Get post data.
        $name    = stripslashes(trim($_POST['name']));
        $email   = stripslashes(trim($_POST['email']));
        $phone   = stripslashes(trim($_POST['phone']));
        $date    = stripslashes(trim($_POST['date']));
        $message = stripslashes(trim($_POST['message']));

        // Sanitize fields.
        $name = filter_var($name, FILTER_SANITIZE_STRING);
        $email = filter_var($email, FILTER_SANITIZE_EMAIL);
        $phone = filter_var($phone, FILTER_SANITIZE_NUMBER_INT);
        $date = filter_var($date, FILTER_SANITIZE_STRING);
        $message = filter_var($message, FILTER_SANITIZE_STRING);
        $message = nl2br($message, false); // false gives <br>, true gives <br />

        // Check header injection.
        $pattern = '/[\r\n]|Content-Type:|Bcc:|Cc:/i';
        if ( preg_match($pattern, $name) || preg_match($pattern, $email) ) {
            $this->errorHandler('header_injection');
        }

        // Validate email.
        $isEmailValid = filter_var($email, FILTER_VALIDATE_EMAIL);

        // Check if name has been entered.
        if ( ! $name ) {
            $this->errorHandler('enter_name');
        }

        // Check if email has been entered and is valid.
        if ( ! $isEmailValid || ! $email ) {
            $this->errorHandler('enter_email');
        }

        // Check if message has been entered.
        if ( ! $message ) {
            $this->errorHandler('enter_message');
        }

        // Prepare headers.
        $headers  = 'MIME-Version: 1.1' . PHP_EOL;
        $headers .= 'Content-type: text/html; charset=utf-8' . PHP_EOL;
        $headers .= "De: $name <$email>" . PHP_EOL;
        $headers .= "Return-Path: $this->address_destination" . PHP_EOL;
        $headers .= "Reply-To: $email" . PHP_EOL;
        $headers .= "X-Mailer: PHP/". phpversion() . PHP_EOL;

        // Prepare body.
        $body = $this->getString('body');
        $body = $this->template( $body, array(
            'subject' => $this->message_subject,
            'name'    => $name,
            'email'   => $email,
            'phone'   => $phone,
            'date'   => $date,
            'message' => $message,
        ) );
        $body = "
        <!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">
        <html>
            <head>
                <title>{$this->message_subject}</title>
                <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />
                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"/>
            </head>
            <body>{$body}</body>
        </html>";

        // If there is no error, send the email.
        $result = @mail($this->address_destination, $this->message_subject, $body, $headers);
        if ( $result ) {
            $this->successHandler('success');
        } else {
            $this->errorHandler('error');
        }
    }

    /**
     * Template string.
     *
     * @param $string
     * @param $vars
     *
     * @return string
     */
    public function template($string, $vars) {
        foreach ( $vars as $name => $val ) {
            $string = str_replace("{{{$name}}}", $val, $string);
        }
        return $string;
    }

    /**
     * Get string from $string variable.
     *
     * @param $string
     *
     * @return string
     */
    public function getString($string) {
        return isset( $this->strings[$string] ) ? $this->strings[$string] : $string;
    }

    /**
     * Error result.
     *
     * @param $message
     */
    public function errorHandler($message) {
        die(json_encode(array(
            'type'     => 'error',
            'response' => $this->getString($message),
        )));
    }

    /**
     * Success result.
     *
     * @param $message
     */
    public function successHandler($message) {
        die(json_encode(array(
            'type'     => 'success',
            'response' => $this->getString($message),
        )));
    }
}
new Ajax_Contact_Form();
