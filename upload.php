<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['file']) && $_FILES['file']['error'] === UPLOAD_ERR_OK) {
        $uploadDir = 'uploads/'; // Directorio donde se guardarán los archivos
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0755, true); // Crea el directorio si no existe
        }

        $fileTmpPath = $_FILES['file']['tmp_name'];
        $fileName = $_FILES['file']['name'];
        $fileSize = $_FILES['file']['size'];
        $fileType = $_FILES['file']['type'];
        $fileNameCmps = pathinfo($fileName);
        $fileExtension = strtolower($fileNameCmps['extension']);

        // Lista de extensiones permitidas
        $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'mp4', 'mov', 'avi'];

        if (in_array($fileExtension, $allowedExtensions)) {
            $destPath = $uploadDir . uniqid('', true) . '.' . $fileExtension;

            if (move_uploaded_file($fileTmpPath, $destPath)) {
                echo "Archivo subido con éxito.";
            } else {
                echo "Error al mover el archivo subido.";
            }
        } else {
            echo "Extensión de archivo no permitida.";
        }
    } else {
        echo "Error al subir el archivo.";
    }
} else {
    echo "Método no permitido.";
}
?>
