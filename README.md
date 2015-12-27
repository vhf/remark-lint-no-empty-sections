# remark-lint-no-empty-sections

This [remark-lint](https://github.com/wooorm/remark-lint) rule was created for [free-programming-books-lint](https://github.com/vhf/free-programming-books-lint) to enforce [free-programming-books](https://github.com/vhf/free-programming-books) [formatting guidelines](https://github.com/vhf/free-programming-books/blob/master/CONTRIBUTING.md#formatting).

This rule checks that every `([#]+)title` has some content. This content can be anything: a lower-level title, a higher-level title, text, list, etc. It will only complain if you have a n-level title without content followed by another n-level title.

```Text
<!-- Invalid -->

# A

## B (this section is empty!)

## C

<!-- Valid -->

# A

## C
```

## Using the rule

### Via `.remarkrc`

```bash
npm install -g remark
npm install -g remark-lint
npm install remark-lint-no-empty-sections # local install!
```

Then, set up your `.remarkrc`:

```JSON
{
  "plugins": {
    "remark-lint": {
      "external": ["remark-lint-no-empty-sections"]
    }
  }
}
```

Now you can use the following command to run the lint:

```bash
remark --no-stdout xxx.md
```

### Via CLI

```bash
npm install -g remark
npm install -g remark-lint
npm install -g remark-lint-no-empty-sections # global install!
remark --no-stdout -u remark-lint="external:[\"remark-lint-no-empty-sections\"]" xxx.md
```

Note that the `lint=<lint_options>` option only works with `remark >= 1.1.1`.

This `README.md` is based on [this one](https://github.com/chcokr/mdast-lint-sentence-newline/blob/250b106c9e19b387270099cf16f17a84643f8944/README.md) by [@chcokr](https://github.com/chcokr) (MIT).
