# dunbit.com

Company website, built with [Hugo](https://gohugo.io) (0.54+) and the custom `dunbit` theme in `themes/dunbit`.

## Run locally

```
hugo server
```

## Editing content

- Home page copy, principles, approach steps, CTA → `data/en/home.yml`
- Services (title, description, outcomes, contact topic) → `data/en/service.yml`
- Contact details, LinkedIn, Formspree form ID → `[params]` in `config.toml`

## Contact form

Set `params.formspree` in `config.toml` to a Formspree form ID to deliver submissions by email.
When it is empty, the form validates and then opens the visitor's email app pre-filled to `params.email`.
