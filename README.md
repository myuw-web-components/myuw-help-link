# myuw-help-link

**`myuw-help-link` is not currently maintained.**

This Web Component presents a stylized link to help.

## Getting Started

Include the web component as follows:

```html
<!-- import the module -->
<script type="module" src="https://cdn.my.wisc.edu/@myuw-web-components/myuw-help-link@latest/myuw-help-link.min.mjs"></script>

<!-- fallback for browsers without ES2015 module support -->
<script nomodule src="https://cdn.my.wisc.edu/@myuw-web-components/myuw-help-link@latest/myuw-help-link.min.js"></script>

<myuw-help-link
  app-context="Payroll"
  url="https://uwservice.wisc.edu/help/payroll"
></myuw-help-link>
```

_Note:_ The evergreen "latest" version can be used for convenience, but in production settings it is recommended to use the latest [release version](https://github.com/myuw-web-components/myuw-help-link/releases) specifically, and upgrade only after testing!

## Usage

### Attributes

#### app-context attribute

The `app-context` attribute clarifies the scope and context of the help linked.

Implementation detail: `myuw-help-link` uses it to compose the link label, as
`{app-context} resources and help`. (This is an implementation detail, not a
guarantee of the API exposed by `myuw-help-link`).

#### url

The `url` attribute tells the web component where the link should take the user.

Absolute links (starting with `http`) open in a new tab (via `target='_blank'`
with the page-jacking-prevention workaround of `rel='noopener noreferrer'`).

## Development and contribution

To run the demo app locally and test the component, run the following commands:

```bash
$ npm install
$ npm start
```
