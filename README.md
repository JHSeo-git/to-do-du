# To Do Du(v1.1)

This project is ToDo App(v1) with firebase.

## v1.1

- update responsive mobile, desktop

## v1

- Only can make a simple Todo

> Design Reference: MS Todo

<p align="center" style="display:grid; grid-template-columns: repeat(3, 1fr); grid-gap: 10px">
    <img src="https://images.velog.io/images/namezin/post/1cad1da7-df9f-4a07-aa98-3be1bc52d00d/login%20page.png" width="100%" />
    <img src="https://images.velog.io/images/namezin/post/f1e4f1d3-0431-49d1-8718-1059a5c99084/social%20login.png" width="100%" />
    <img src="https://images.velog.io/images/namezin/post/4b8e8abc-b61c-4899-af4a-515feece2cf8/loading.png" width="100%" />
    <img src="https://images.velog.io/images/namezin/post/163e3c86-6dfd-4d8a-a801-aeacc3fc5fba/main%20page.png" width="100%" />
    <img src="https://images.velog.io/images/namezin/post/7690d047-3df5-498a-8b84-030506be861e/todo%20example.png" width="100%" />
    <img src="https://images.velog.io/images/namezin/post/35fc0555-4d8e-43a4-a2fe-45fb78b886c3/logout%20collapse%20sidebar.png" width="100%" />
    <img src="https://images.velog.io/images/namezin/post/201392c4-6ccd-4140-a48e-9c2fed9da3f9/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-12-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.09.04.png" width="100%" />
    <img src="https://images.velog.io/images/namezin/post/7ca33762-cde9-4b55-94c8-f4bb9e35abbe/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-12-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.09.17.png" width="100%" />
    <img src="https://images.velog.io/images/namezin/post/f35f7963-bb31-47eb-9ec2-c9210eebae05/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-12-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.09.24.png" width="100%" />
    <img src="https://images.velog.io/images/namezin/post/15391853-aefc-40b7-be4b-37a8050a778f/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202020-12-16%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2011.09.30.png" width="100%" />
</p>

# Project Stack

- firebase(authentication, firestore)
- typescript
- react
- react-router
- react-redux
- redux-saga
- typesafe-redux
- styled-components
- immer

## Redux Stack

- pattern : ducks
- mapStateToProps, mapStateToProps: use hooks(react-redux)
- snyc reducer : typesafe-actions > reducer
- async reducer : redux-saga, generator
- immutability: immer.js
- throttle, debounce: lodash

# Directory Structure

- functional component with hooks

```
src
├── components
│   ├── base
│   │   ├── FullscreenLoader.tsx
│   │   ├── Header.tsx
│   │   ├── HelmetGlobal.tsx
│   │   ├── UserMenu.tsx
│   │   ├── UserMenuButton.tsx
│   │   └── UserMenuItem.tsx
│   ├── common
│   │   └── Spinner.tsx
│   ├── home
│   │   ├── HomeTemplate.tsx
│   │   ├── LandingTemplate.tsx
│   │   ├── LoginForm.tsx
│   │   └── SocialButton.tsx
│   ├── sidebar
│   │   ├── Sidebar.tsx
│   │   └── SidebarMenu.tsx
│   ├── todo
│   │   ├── NewTodo.tsx
│   │   ├── NewTodoButton.tsx
│   │   ├── NewTodoInput.tsx
│   │   ├── Todo.tsx
│   │   ├── TodoCircleButton.tsx
│   │   ├── TodoDetail.tsx
│   │   ├── TodoInput.tsx
│   │   ├── Todos.tsx
│   │   ├── TodosRoute.tsx
│   │   └── TodosTemplate.tsx
│   ├── App.tsx
│   └── AppRouter.tsx
├── lib
│   ├── api
│   │   ├── auth.ts
│   │   └── todos.ts
│   ├── hooks
│   │   ├── common
│   │   │   ├── useConfirm.ts
│   │   │   ├── useDelayUnmount.ts
│   │   │   ├── useExpandable.ts
│   │   │   ├── useFocus.ts
│   │   │   └── useOnClickOutside.ts
│   │   └── redux
│   │       ├── auth
│   │       │   ├── useAuthState.ts
│   │       │   └── useSocialLogin.ts
│   │       ├── base
│   │       │   ├── useBaseState.ts
│   │       │   ├── useToggleSidebar.ts
│   │       │   └── useUserMenu.ts
│   │       ├── todos
│   │       │   ├── useAddTodo.ts
│   │       │   ├── useChangeRegisterTodo.ts
│   │       │   ├── useDeleteTodo.ts
│   │       │   ├── useGetTodos.ts
│   │       │   ├── useSelectedTodo.ts
│   │       │   ├── useSyncTodos.ts
│   │       │   ├── useTodoState.ts
│   │       │   ├── useToggleNewInput.ts
│   │       │   ├── useUpdateTodoDetail.ts
│   │       │   └── useUpdateTodoItem.ts
│   │       └── user
│   │           ├── useLogout.ts
│   │           ├── useSetUser.ts
│   │           └── useUserState.ts
│   ├── common.ts
│   ├── fbUtils.ts
│   └── sagaUtils.ts
├── pages
│   ├── Home.tsx
│   └── Todos.tsx
├── static
│   └── images
│       └── logo.svg
├── store
│   ├── modules
│   │   ├── auth-back.ts
│   │   ├── auth.ts
│   │   ├── base.ts
│   │   ├── index.ts
│   │   ├── todos.ts
│   │   └── user.ts
│   ├── configure.ts
│   └── index.ts
├── styles
│   ├── lib
│   │   ├── Icon.tsx
│   │   ├── animation.tsx
│   │   └── common.tsx
│   ├── globalStyles.ts
│   ├── styles.d.ts
│   └── theme.ts
├── fBase.ts
├── index.tsx
└── react-app-env.d.ts
```

# TODO

- [x] responsive
- [ ] Redesign for all pages
- [ ] Welcome page background
- [ ] Only Today todos
- [ ] Detail Target Date
- [ ] micro interactive
- [ ] add storybook
- [ ] add test(jest)
