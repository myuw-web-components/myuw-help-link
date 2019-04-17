# myuw-help-link

This Web Component presents a stylized link to help.

## Using

To use the `myuw-help-link` web component,

1. Make it available in the HTML page by invoking suitable `<script>`, and
2. Use it via the `<myuw-help-link>` element.

### Import the web component

#### In MyUW

MyUW provides a local CDN-like (Content Delivery Network-like) affordance.

Rely upon the latest v1-compatible release

```html
<script
  type="module"
  src="/static/web-components/myuw/myuw-help-link/1-x/myuw-help-link.min.mjs"></script>
<script
  nomodule
  src="/static/web-components/myuw/myuw-help-link/1-x/myuw-help-link.min.js"></script>
```

(See [documentation about myuw-help-link in static][] for more conservative options.)

#### Using unpkg

In HTML `<head>`,

```html
<script type="module" src="https://unpkg.com/@myuw-web-components/myuw-help-link@^1?module"></script>
<script nomodule src="https://unpkg.com/@myuw-web-components/myuw-help-link@^1"></script>
```

to import via unpkg.

WARNING: unpkg is a third-party service neither provided nor endorsed by MyUW.
In a MyUW context, sourcing from `/static` is preferred.

#### Redistribute with the downstream app

Alternatively include the web component files locally in the application and
import from there.

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

Implementation detail: `myuw-help-link` uses it to compose the link label, as
`{app-context} resources and help`. (This is an implementation detail, not a
guarantee of the API exposed by `myuw-help-link`).

#### url

The `url` attribute tells the web component where the link should take the user.

Absolute links (starting with `http`) open in a new tab (via `target='_blank'`
with the page-jacking-prevention workaround of `rel='noopener noreferrer'`).

[documentation about myuw-help-link in static]: https://git.doit.wisc.edu/myuw/myuw-shared-static/tree/master/src/main/webapp/web-components/myuw/myuw-help-link
