# Boilerplate for AEM Crosswalk
This is our Crosswalk boilerplate.

## Table of Contents
- [Getting started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Start development](#start-development)
- [Troubleshooting](#troubleshooting)
- [Further reading](#further-reading)


## Getting started

### Prerequisites

- Access to Diva-e AEMaaCS program
- Local AEM SDK running on HTTP port 4502 and HTTPS port 8443
- Universal Editor
- node version 18+

### Installation

```sh
npm ci
npm run build
```

### Start development

- Setup your [local AEM to run on HTTPS](https://experienceleague.adobe.com/en/docs/experience-manager-learn/foundation/security/use-the-ssl-wizard) 
  - Make sure the self-signed `localhost.crt` is always trusted in your system.
  - You should be able to access your local AEM via [https://localhost8443](https://localhost8443)
- Install [Boilerplate project](https://github.com/diva-e-aem/xwalk-boilerplate)
- Setup your [local Universal Editor](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/local-dev#install-ue-service) and make sure you can access your local Universal Editor [https://localhost:8000/corslib/LATEST](https://localhost:8000/corslib/LATEST)
- Create a `.env` file at the root of this project and adjust the path to your local certificate and private key
  ```
  AEM_TLS_CERT=localhost.crt
  AEM_TLS_KEY=localhost.key
  ```
- Start your Frontend application at https://localhost:3000
  ```sh
  npm run start
  ```
- You should be now able to edit any pages in Universal Editor by opening it in AEM and clicking Edit
  -  Alternatively open Universal Editor "standalone" directly via https://experience.adobe.com/#/aem/editor and add the local URL of the page, e.g. https://localhost:8443/content/xwalk-boilerplate/index.html

## Troubleshooting

- You see a white page in Universal Editor or a network error on the right side panel
  - Open the page outside the Universal Editor (e.g. https://localhost:8443/content/xwalk-boilerplate/index.html). If the page is blank, view the page source. You would see a stack trace. Check the error and fix it.
- You have a SSL Handshake error
  - Make sure you imported the self-signed certificate into the JDK truststore that is used by AEM. Run the `keytool` command in the `<JDK_ROOT>/lib/security` directory and restart the AEM. 
- Your local changes (model or styles) are not reflected immediately
  - Make sure your local proxy shows the local changes, e.g. 
    https://localhost:8443/content/xwalk-boilerplate.resource/component-models.json and 
    https://localhost:3000/component-models.json \
    must both show your local model-definitions.json, or
    https://localhost:8443/content/xwalk-boilerplate.resource/dist/styles/styles.css and
    https://localhost:3000/dist/styles/styles.css \
    should display the content of your local dist/styles/styles.css.

## Further reading
- [Create block](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/wysiwyg-authoring/create-block)
- [Content modeling](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/wysiwyg-authoring/content-modeling)
- [Universal Editor field types](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/field-types)
- [Local AEM Development with the Universal Editor](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/implementing/developing/universal-editor/local-dev)
