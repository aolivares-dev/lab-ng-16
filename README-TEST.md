# TEST-README.md

## Configuración y Ejecución de Pruebas Unitarias en Angular

Este archivo describe cómo configurar y ejecutar pruebas unitarias en un proyecto Angular en un entorno Linux Ubuntu, utilizando **Karma** con **ChromeHeadless**.

### Requisitos Previos
Asegúrate de que tienes lo siguiente instalado en tu entorno:

- **Node.js** (>= 14.x)
- **npm** (>= 6.x)
- **Angular CLI**
- **Google Chrome** (para ejecutar en modo headless)
  
### 1. Instalación de Node.js y npm

Primero, instala **Node.js** y **npm** si no están ya instalados:

```bash
sudo apt update
sudo apt install nodejs npm -y
```

Verifica la instalación con:

```bash
node -v
npm -v
```

### 2. Instalación de Angular CLI

Instala **Angular CLI** globalmente:

```bash
npm install -g @angular/cli
```

Verifica la versión instalada:

```bash
ng --version
```

### 3. Instalación de Google Chrome

Para ejecutar las pruebas unitarias en **ChromeHeadless**, necesitas instalar **Google Chrome**:

```bash
# Actualizar paquetes y dependencias
sudo apt update
sudo apt install -y wget gnupg2

# Añadir la clave pública de Google
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -

# Añadir el repositorio de Google Chrome
sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google-chrome.list'

# Instalar Google Chrome
sudo apt update
sudo apt install -y google-chrome-stable
```

### 4. Configuración de la Variable de Entorno `CHROME_BIN`

Para que **Karma** encuentre el binario de **ChromeHeadless**, configura la variable de entorno `CHROME_BIN`:

```bash
export CHROME_BIN=/usr/bin/google-chrome
```

Para hacer esta configuración permanente, puedes añadir esta línea al archivo `~/.bashrc` y luego cargar los cambios:

```bash
echo 'export CHROME_BIN=/usr/bin/google-chrome' >> ~/.bashrc
source ~/.bashrc
```

### 5. Instalar Dependencias del Proyecto

Si ya tienes un proyecto Angular existente, navega al directorio del proyecto y ejecuta:

```bash
npm install
```

Esto instalará todas las dependencias listadas en el archivo `package.json`.

### 6. Configuración de Karma

Asegúrate de que tu archivo `karma.conf.js`, ubicado en la raíz del proyecto, está configurado para ejecutar en **ChromeHeadless**. Verifica que la sección `browsers` se vea de la siguiente manera:

```javascript
module.exports = function (config) {
  config.set({
    browsers: ['ChromeHeadless'],
    // Otros ajustes de Karma
  });
};
```

### 7. Ejecución de Pruebas

Ahora puedes ejecutar las pruebas unitarias en **ChromeHeadless** con el siguiente comando:

```bash
ng test --browsers=ChromeHeadless --watch=false
```

Este comando:

- Ejecuta las pruebas una vez (sin la opción `--watch`, que vuelve a ejecutar las pruebas en cada cambio).
- Utiliza **ChromeHeadless** para ejecutar las pruebas en un navegador sin interfaz gráfica.

### 8. Solución de Problemas

- Si el comando de prueba no encuentra el binario de Chrome, asegúrate de que la variable `CHROME_BIN` esté configurada correctamente y de que **Google Chrome** está instalado en el directorio adecuado.
  
- Si el archivo `karma.conf.js` no existe, puedes generarlo ejecutando el siguiente comando:

```bash
ng test --watch=false
```
