var templateHtml = "<style> :host {\n    display: flex;\n    font-style: inherit;\n    font-variant: inherit;\n    font-family: inherit;\n  } </style> <a id=\"help-link\" href=\"https://www.example.edu/from-myuw-help-link\"> Help and resources <!-- material.io launch icon--> <svg id=\"launch-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"> <path d=\"M0 0h24v24H0z\" fill=\"none\"/> <path d=\"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z\"/> </svg> </a> ";

class MyUWHelpLink extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(this.constructor.template.content.cloneNode(true));
    this.helpLinkElement = this.shadowRoot.getElementById('help-link');
  }

  static get observedAttributes() {
    return [
      'app-context',
      'url'
    ];
  }

  static get template() {
    if (this._template === undefined) {
      this._template = document.createElement('template');
      this._template.innerHTML = templateHtml;
    }
    return this._template;
  }

  /**
  * Web component lifecycle hook to update changed properties
  */
  attributeChangedCallback(name, oldValue, newValue) {
    // Update the attribute internally
    this[name] = newValue;
    // Update the component
    this.updateComponent();
  }

  /**
  * When component is first attached to the DOM,
  * get its defined attributes and set up listeners
  */
  connectedCallback() {
    // Get all attributes
    this['app-context'] = this.getAttribute('app-context');
    this['url']         = this.getAttribute('url');
    this.$link = this.shadowRoot.getElementById('help-link');
  }

  /**
  * Update the component state
  */
  updateComponent() {
    const materialLaunchIcon = this.shadowRoot.getElementById('launch-icon');
    this.helpLinkElement.innerHTML = this['app-context'] + " help and resources ";
    this.helpLinkElement.appendChild(materialLaunchIcon);
    this.helpLinkElement.setAttribute("href", this['url']);
    if (this['url'] && this['url'].startsWith("http")) {
      this.helpLinkElement.setAttribute("rel", "noopener noreferrer");
      this.helpLinkElement.setAttribute("target", "_blank");
    }
  }

}

window.customElements.define('myuw-help-link', MyUWHelpLink);
