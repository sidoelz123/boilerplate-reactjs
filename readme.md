## about
- tailwindcss
- reactjs
- generouted

## Installation

- cd boilerplate-reactjs 
- yarn
- yarn dev

<br>

## Features

- 📁 Client-side file-based routing
- ⚡ Powered by [Vite](https://vitejs.dev)
- ✨ React support with [`react-router-dom`](https://github.com/remix-run/react-router) or [`@tanstack/router`](https://github.com/tanstack/router) 🧪 or [`@tanstack/react-location`](https://github.com/tanstack/router/tree/9c8eb043e4ac350fc1d28655542e01defb0c82e5) 🚨
- ✨ Solid support with [`@solidjs/router`](https://github.com/solidjs/solid-router)
- 🔐 Type-safe navigation
- 🚀 Type-safe global modals
- 💤 Route-based code-splitting and lazy-loading
- 📄 Route-based data loaders and actions
- 💣 Route-based error boundary
- 📂 Nested layouts
- 🫙 Pathless layout groups
- ❓ Optional static and dynamic routes
- 💭 Ignored routes per file or directory

<br>

<br>

## Online explorer

- ⚡ Visit [`generouted`'s interactive playground via StackBlitz](https://stackblitz.com/github.com/oedotme/generouted/tree/main/explorer)
- 🧩 Explore file-based routing patterns and conventions
- 🔎 Visualize the routes layouts and the resolved routes paths
- 📝 Update `src/pages/` files and see your changes reflecting

<br>

## Conventions

### File and directories naming and conventions

- Routes declaration at `src/pages`
- Supports `.tsx` or `.jsx` extensions
- Optional `src/pages/_app.tsx` for an **app level layout**
- Optional `src/pages/404.tsx` for a **custom not-found page**

#### Index routes

- `src/pages/index.tsx` → `/`
- `src/pages/posts/index.tsx` → `/posts`

#### Nested routes

- `src/pages/posts/2022/index.tsx` → `/posts/2022`
- `src/pages/posts/2022/resolutions.tsx` → `/posts/2022/resolutions`

#### Dynamic routes

- `src/pages/posts/[slug].tsx` → `/posts/:slug`
- `src/pages/posts/[slug]/tags.tsx` → `/posts/:slug/tags`
- `src/pages/posts/[...all].tsx` → `/posts/*`

#### Nested layouts

- By defining `_layout.tsx` in any nested directory → `src/pages/posts/_layout.tsx`
- **Requires** using an `<Outlet />` component to render layout children
- All the files within the `src/pages/posts/` directory in this case, will be wrapped with that layout

#### Nested URLs without nested layouts

- Route file should be outside of the nested layout directory
- Include **dots** `.` between the segments to be converted to forward slashes
- `src/pages/posts.nested.as.url.not.layout.tsx` → `/posts/nested/as/url/not/layout`

#### Pathless layouts

- Similar to nested layouts for layout definition
- By wrapping the parent directory with **parentheses** `()`
- `src/pages/(auth)/_layout.tsx`
- `src/pages/(auth)/login.tsx` → `/login`
- Layout parent directory name is not included in the routes paths

#### Global modals

- By **prefixing** the file name with a **plus sign** `+` _(thinking the modal is an extra route overlaying the current route)_
- Modals navigation available via the `useModals()` hook
- `src/pages/+info.tsx` → `/info`
- `src/pages/+checkout/+details.tsx` → `/checkout/details`
- `src/pages/+checkout/+payment.tsx` → `/checkout/payment`

#### Optional segments

- By **prefixing** a route segment with a **minus sign** `-` _(thinking the segment can be subtracted or removed from the route path)_
- `src/pages/-en/about.tsx` → `/en?/about` → `/en/about`, `/about`
- `src/pages/-[lang]/about.tsx` → `/:lang?/about` → `/en/about`, `/fr/about`, `/about`

#### Ignored routes

- Any directory or file starts with an **underscore** `_` will be **ignored**
- `src/pages/_ignored.tsx`
- `src/pages/posts/_components/button.tsx`
- `src/pages/posts/_components/link.tsx`

<br>

### Page exports

- **Required** page component `export default Component() {...}`
- Optional page loader function `export const Loader = () => {...}`
- Optional page action function `export const Action = () => {...}`
- Optional error boundary component `export const Catch = () => {...}`

<br>

### Example

<details>
<summary><b>Directory structure</b></summary>

<br>

```shell
src/pages
├── (auth)
│   ├── _layout.tsx
│   ├── login.tsx
│   └── register.tsx
├── blog
│   ├── _components
│   │   ├── button.tsx
│   │   └── comments.tsx
│   ├── [...all].tsx
│   ├── [slug].tsx
│   ├── _layout.tsx
│   ├── index.tsx
│   └── tags.tsx
├── docs
│   ├── -[lang]
│   │   ├── index.tsx
│   │   └── resources.tsx
│   └── -en
│       └── contributors.tsx
├── +info.tsx
├── 404.tsx
├── _app.tsx
├── _ignored.tsx
├── about.tsx
├── blog.w.o.layout.tsx
└── index.tsx
```

</details>

<details open="true">
<summary><b>Overview</b></summary>

<br>

| File                            | Path                     | Convention                            |
| :------------------------------ | :----------------------- | :------------------------------------ |
| `(auth)/_layout.tsx`            |                          | Pathless Layout group                 |
| `(auth)/login.tsx`              | `/login`                 | Regular route                         |
| `(auth)/register.tsx`           | `/register`              | Regular route                         |
| `blog/_components/button.tsx`   |                          | Ignored route by an ignored directory |
| `blog/_components/comments.tsx` |                          | Ignored route by an ignored directory |
| `blog/[...all].tsx`             | `/blog/*`                | Dynamic catch-all route               |
| `blog/[slug].tsx`               | `/blog/:slug`            | Dynamic route                         |
| `blog/_layout.tsx`              |                          | Layout for `/blog` routes             |
| `blog/index.tsx`                | `/blog`                  | Index route                           |
| `blog/tags.tsx`                 | `/blog/tags`             | Regular route                         |
| `docs/-[lang]/index.tsx`        | `/docs/:lang?/index`     | Optional dynamic route segment        |
| `docs/-[lang]/resources.tsx`    | `/docs/:lang?/resources` | Optional dynamic route segment        |
| `docs/-en/contributors.tsx`     | `/docs/en?/contributors` | Optional static route segment         |
| `+info.tsx`                     | `/info`                  | Modal route                           |
| `404.tsx`                       | `*`                      | Custom `404` _(optional)_             |
| `_app.tsx`                      |                          | Custom `app` layout _(optional)_      |
| `_ignored.tsx`                  |                          | Ignored route                         |
| `about.tsx`                     | `/about`                 | Regular route                         |
| `blog.w.o.layout.tsx`           | `/blog/w/o/layout`       | Route without `/blog` layout          |
| `index.tsx`                     | `/`                      | Index route                           |

</details>

<br>
## API

### Routing

Via [`@generouted/react-router`](/plugins/react-router) or [`@generouted/solid-router`](/plugins/solid-router)

- `<Routes />` — file-based routing component to be render in the app entry
- `<Modals />` — optional file-based modals component to be render in the `_app.tsx` layout
- `routes` — file-based routes tree/object used by default at `<Routes />` component

### Routing + code-splitting and lazy-loading

Via `@generouted/react-router/lazy` or `@generouted/solid-router/lazy`

- Used instead of `@generouted/react-router` or `@generouted/solid-router` to enable lazy-loading
- Make sure to replace all imports to lazy imports — namely at app entry and `src/pages/_app.tsx`
- Provides the same `<Routes />`, `<Modals />` and `routes` exports

### Plugins

Via `@generouted/react-router/plugin` or `@generouted/solid-router/plugin`

- Vite plugin for type generation and initializing type-safe components/hooks/utils
- Generates `src/router.ts` file
- Exports type-safe `<Link>`, `<Navigate>`, `useModals()`, `useNavigate()`, `useParams()`, `redirect()`, etc.
- Check out [`@generouted/react-router` docs](/plugins/react-router) or [`@generouted/solid-router` docs](/plugins/solid-router) for more details

### Core

Via `@generouted/react-router/core` or `@generouted/solid-router/core`

- Available for customization, however it's recommended to use the available integrations directory via the `<Routes/>` component
- Check out the [custom integration example](/examples/react-router-custom)

<br>


