# Button

Normal application button :D. 

```js
import Button from './components/Button';
```

<!-- STORY -->

### Properties

| propName | propType | defaultValue | isRequired |
| -------- | -------- | ------------ | ---------- |
| primary  | boolean  | false        | -          |
| alert    | boolean  | false        | -          |
| danger   | boolean  | false        | -          |

### More styles to button

Use **alert**, **danger** and **danger** flags only in these cases:

**primary** - change color green

```jsx
<Button primary> Primary </Button>
```

**alert** - change color orange

```jsx
<Button alert> Alert </Button>
```

**danger** - change color red

```jsx
<Button danger> Danger </Button>
```