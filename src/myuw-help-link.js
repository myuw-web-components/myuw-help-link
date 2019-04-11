import tpl from './myuw-help-link.html';
class MyUWHelpLink extends HTMLElement {

  constructor() {
    super();

    // Create a shadowroot for this element
    this.attachShadow({mode: 'open'});

    // Append the custom HTML to the shadowroot
    this.shadowRoot.appendChild(MyUWHelpLink.template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return [
      'app-context',
      'url'
    ];
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

    var materialLaunchIcon = this.shadowRoot.getElementById('launch-icon');

    this.shadowRoot.getElementById('help-link').innerHTML =
      this['app-context'] + " help and resources ";

    this.shadowRoot.getElementById('help-link').appendChild(materialLaunchIcon);

  }
}

MyUWHelpLink.template = (function template(src) {
  const template = (document.createElement('template'));
  template.innerHTML = src;
  return template;
})(tpl);

window.customElements.define('myuw-help-link', MyUWHelpLink);
