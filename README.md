# myuw-help-link

**NOTE: this README is aspirational rather than describing current reality.**

This Web Component presents a stylized link to help.

## Using

### Import the web component

In HTML `<head>`,

```html
<script type="module" src="https://unpkg.com/@myuw-web-components/myuw-help-link@^1?module"></script>
<script nomodule src="https://unpkg.com/@myuw-web-components/myuw-help-link@^1"></script>
```

to import via unpkg, or alternatively include the web component files locally in the application and import from there.

### Invoke the Web Component

Use the component's in the HTML page:

```html
<myuw-help-link
  app-context="Payroll"
  url="https://uwservice.wisc.edu/help/payroll">
</myuw-help-link>
```

#### app-context attribute

The `app-context` attribute clarifies the scope and context of the help linked.

`myuw-help-link` uses it to compose the link label, as
`{app-context} resources and help`.

#### url

The `url` attribute tells the web component where the link should take the user.

Absolute links (starting with `http`) open in a new tab (via `target='_blank'`
with the page-jacking-prevention workaround of `rel='noopener noreferrer'`).
