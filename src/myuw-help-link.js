import templateHtml from './myuw-help-link.html';

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
      this._template.innerHTML = templateHtml
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
