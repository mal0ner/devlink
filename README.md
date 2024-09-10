# DevLink Marketplace
Single-Page Full-Stack React application. Built as a learning experience.

![image](https://github.com/user-attachments/assets/5f468f90-cd93-4781-a748-d5c8d3dd9341)

Available: https://devlink-marketplace.netlify.app/

## Tech Stack

### Frontend

| Category                     | Name                            |
| ---------------------------- | ------------------------------- |
| Frontend UI                  | ReactJS                         |
| Build System / Bundler       | Vite                            |
| CSS Framework                | TailwindCSS (As postCSS plugin) |
| UI Component Lib / Framework | ShadCN/UI                       |

### Backend

**Database:** `firebase/firestore` document-db for storing user and post data.

**Bucket Storage:** `firebase/storage` storage bucket for dumping images attached to job postings.

**Auth:** `firebase/auth` handles secure user authentication and authorization. Supports email/password authentication as well as integrated Google signup/login.

**Payments:** `Stripe` custom JS stripe paymentIntent server for payment integration. Visible on the <a href="https://github.com/mal0ner/devlink/tree/feat/payment">feat/payment</a> branch but not available on the hosted site as this is a demonstration project only. 
 
## Visual Resources

| Type                     | Source        |
| ------------------------ | ------------- |
| Vector Images            | blush.design  |
| Fonts                    | Google Fonts  |
| Dev and customer avatars | boringavatars |
| Filler text/user data    | FakerJS       |
| Social Media Icons       | Lucide-React  |

All imagery in this website mockup was sourced via a premium subscription to www.blush.design.
Free-use fonts used are _Yeseva_ (Headers) and _Josefin_ (accent) and can be found on Google Fonts.

## References

- Help on star ratings in CSS: https://css-tricks.com/five-methods-for-five-star-ratings/
- React Hook Forms with Zod validation: https://ui.shadcn.com/docs/components/form
- React-Router-Dom Outlet usage: https://stackoverflow.com/questions/70833727/using-react-router-v6-i-need-a-navbar-to-permanently-be-there-but-cant-display
- React-Router-Dom Styling active link: https://stackoverflow.com/questions/71605440/react-router-v6-activestyle-issues
- UseFieldArray React-Hook-Form third-party hook for dynamic form fields: https://www.youtube.com/watch?v=tvEeNPy7OVA
- React-Router-Dom getting started: https://reactrouter.com/en/main/start/tutorial
- Zod Form Resolver type checking syntax help: https://github.com/react-hook-form/resolvers/issues/73
- Nested Objects in Zod: https://stackoverflow.com/questions/74967542/zod-validation-for-an-array-of-objects
- ShadCN-UI Website examples: https://github.com/shadcn-ui/ui/blob/main/apps/www/app/examples/forms/profile-form.tsx

- ZOD SCHEMA EMAIL VALIDATION AGAINST BACKEND: https://stackoverflow.com/questions/75148276/email-validation-with-zod
- ZOD Password / Confirm Password checking. https://stackoverflow.com/questions/73695535/how-to-check-confirm-password-with-zod
- More ZOD password / form validation: https://articles.wesionary.team/react-hook-form-schema-validation-using-zod-80d406e22cd8
- Managing / Updating user profiles in Firebase: https://stackoverflow.com/questions/50000630/how-to-update-user-profile-in-firebase
- Generating custom embedded profile picture URLs with boring-avatars.js: https://github.com/boringdesigners/boring-avatars-service/blob/main/README.md

- Database Pagination: https://makerkit.dev/blog/tutorials/pagination-react-firebase-firestore
- Text search and pagination with firebase: https://medium.com/@ken11zer01/firebase-firestore-text-search-and-pagination-91a0df8131ef
- Loading Spinner in tailwind: https://www.braydoncoyer.dev/blog/how-to-create-an-animated-loading-spinner-with-tailwind-css
- Events from child to parent React: https://stackoverflow.com/questions/74864178/how-do-i-emit-events-from-a-child-component-to-a-parent-component-in-react
- Defining and using types for typesafety with Firebase and typescript: https://medium.com/swlh/using-firestore-with-typescript-65bd2a602945
- Define type for function callback in object typescript: https://stackoverflow.com/questions/29689966/how-to-define-type-for-a-function-callback-as-any-function-type-not-universal
- TypeScript function types: https://dmitripavlutin.com/typescript-function-type/
- Firestore query by array of object field value: https://stackoverflow.com/questions/54081799/firestore-to-query-by-an-arrays-field-value
- Firestore query on substring of property value: https://stackoverflow.com/questions/46568142/google-firestore-query-on-substring-of-a-property-value-text-search

- Custom Typing for React forms typescript: https://claritydev.net/blog/typescript-typing-form-events-in-react

- Firebase / Firestore Pagination custom hook with react: https://github.com/CSFrequency/react-firebase-hooks/issues/13
- React Firebase Hooks Library: https://github.com/CSFrequency/react-firebase-hooks
- Best practices for storing fetched data: https://stackoverflow.com/questions/64377310/common-ways-to-store-fetched-data-for-a-react-app
- Using Events for passing data up the component tree: https://www.freecodecamp.org/news/pass-data-between-components-in-react/
- Stripe JS Redirect only if necessary: https://github.com/vercel/next.js/discussions/33846
- creating a mock paymentIntent for Stripe: https://stripe.com/docs/api/payment_intents/create?lang=node
- Stripe JS and React Integration: https://www.youtube.com/watch?v=e-whXipfRvg
- Stripe Official Docs on react integration: https://stripe.com/docs/stripe-js/react
- Stripe and Firebase integration (PAID SOLUTION, not used): https://www.youtube.com/watch?v=xi3F2Zv91UE

