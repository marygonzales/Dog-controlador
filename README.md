# 🐾 La pausa controladora

**La pausa controladora** es una extensión de navegador diseñada para mejorar el bienestar y la productividad de los usuarios, especialmente pensada para el sector educativo. Utiliza la técnica de pausas activas mediante la reproducción programada de videos de mascotas para reducir el estrés digital.

## 🚀 Funcionalidades
* **Temporizador Inteligente:** Programación de intervalos de descanso.
* **Contenido de Bienestar:** Reproducción automática de videos de mascotas (`perro_controlador.mp4`).
* **Interfaz No Intrusiva:** Superposición controlada sobre la pestaña activa para asegurar el cumplimiento del descanso.

## 🛠️ Tecnologías utilizadas
* **JavaScript (Manifest V3):** Lógica central de la extensión.
* **HTML/CSS:** Interfaz del popup y estilos de la superposición.
* **GitHub:** Control de versiones y documentación.

## 📂 Estructura del Proyecto
* `manifest.json`: Configuración y permisos de la extensión.
* `background.js`: Gestión de eventos en segundo plano y alarmas.
* `content.js`: Inyección del contenido de pausa en los sitios web.
* `popup.html/js`: Interfaz de configuración para el usuario.

## 🔒 Privacidad
Esta extensión no recolecta información personal. El acceso al historial web se utiliza exclusivamente para sincronizar las pausas sobre la navegación activa y todos los datos de configuración se almacenan localmente en el navegador.
