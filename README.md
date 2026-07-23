# Taleem Admin Client

The **Taleem Admin Client** is the official JavaScript SDK for the Taleem Server Admin API.

It provides a simple object-oriented interface for authentication and administration without requiring direct HTTP requests.

---

## Installation

```bash
npm install taleem-admin-client
```

---

## Create Client

```javascript
import { TaleemAdminClient } from "taleem-admin-client";

const taleem = new TaleemAdminClient(
    "http://127.0.0.1:9000"
);
```

---

# Authentication

## Login

```javascript
await taleem.connection.login(
    "admin@example.com",
    "password"
);
```

---

## Logout

```javascript
await taleem.connection.logout();
```

---

## Verify Token

```javascript
const user =
    await taleem.connection.verify();
```

---

## Check Login

```javascript
if (taleem.connection.isLoggedIn()) {

    console.log("Logged in");

}
```

---

# Library API

## List

```javascript
const items =
    await taleem.library.list();
```

---

## Read

```javascript
const item =
    await taleem.library.read(
        "pre-algebra"
    );
```

---

## Create

```javascript
await taleem.library.create({

    slug: "new-course",

    title: "New Course",

    description: "Description",

    type: "HTML",

    body: "<h1>Hello</h1>",

    thumbnail: null,

    courseId: "course-public"

});
```

---

## Update

```javascript
await taleem.library.update(
    "new-course",
    {

        title: "Updated Title"

    }
);
```

---

## Remove

```javascript
await taleem.library.remove(
    "new-course"
);
```

---

# Course API

## List

```javascript
await taleem.course.list();
```

---

## Read

```javascript
await taleem.course.read(
    "course-public"
);
```

---

## Create

```javascript
await taleem.course.create({

    id: "course-demo",

    slug: "course-demo",

    title: "Demo Course",

    description: "Example",

    access: "PUBLIC"

});
```

---

## Update

```javascript
await taleem.course.update(
    "course-demo",
    {

        title: "Updated Course"

    }
);
```

---

## Remove

```javascript
await taleem.course.remove(
    "course-demo"
);
```

---

# Communication API

## List

```javascript
await taleem.communication.list();
```

---

## Read

```javascript
await taleem.communication.read(
    1
);
```

---

## Create

```javascript
await taleem.communication.create({

    referenceId: "lesson-1",

    type: "QUESTION",

    message: "How do fractions work?",

    isPublic: true

});
```

> `userId` is automatically determined from the authenticated user.

---

## Update

```javascript
await taleem.communication.update(
    1,
    {

        message: "Updated message"

    }
);
```

---

## Remove

```javascript
await taleem.communication.remove(
    1
);
```

---

# Subscription API

## List

```javascript
await taleem.subscription.list();
```

---

## Read

```javascript
await taleem.subscription.read(
    1
);
```

---

## Create

```javascript
await taleem.subscription.create({

    userId: 5,

    courseId: "course-public",

    startsAt: new Date(),

    endsAt: new Date("2027-01-01")

});
```

---

## Update

```javascript
await taleem.subscription.update(
    1,
    {

        endsAt: new Date("2028-01-01")

    }
);
```

---

## Remove

```javascript
await taleem.subscription.remove(
    1
);
```

---

# API Structure

```text
taleem
│
├── connection
│   ├── login()
│   ├── logout()
│   ├── verify()
│   ├── token()
│   └── isLoggedIn()
│
├── library
│   ├── list()
│   ├── read()
│   ├── create()
│   ├── update()
│   └── remove()
│
├── course
│   ├── list()
│   ├── read()
│   ├── create()
│   ├── update()
│   └── remove()
│
├── communication
│   ├── list()
│   ├── read()
│   ├── create()
│   ├── update()
│   └── remove()
│
└── subscription
    ├── list()
    ├── read()
    ├── create()
    ├── update()
    └── remove()
```

---

## License

MIT