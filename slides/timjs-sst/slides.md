---
theme: apple-basic
fonts:
  sans: 'Instrument Sans'
  mono: 'Fira Code'
highlighter: shiki
lineNumbers: true
monaco: 'dev'
info: |
  ## TimJS
  Using Typescript for your Serverless Infrastructure
drawings:
  persist: false
transition: slide-left
title: Using Typescript for your Serverless Infrastructure
colorSchema: 'light'

layout: intro-image
image: /aurora.jpg
---

<div class="absolute top-10 px-12">
  <span class="font-500">
    Arpad Gabor / 14.06.2023
  </span>
</div>

<div class="absolute bottom-10 px-12">
  <div class="border rounded-lg border-white/10 bg-white/5 backdrop-blur-sm px-6 py-4">
    <h1 class="tracking-tight !leading-none font-900 !m-0">Using TypeScript for your <span class="">Serverless Infrastructure</span> </h1>
  </div>
</div>

---

<section class="flex h-full space-x-8">
  <div class="p-8 w-1/2">

  # I'm Arpad.

  You can also call me *Arpi*.

  Tech lead @ **Webamboos**

  Doing all kinds of things.

  </div>

  <div class="p-2 rounded-lg bg-black/5 border border-black/10 backdrop-blur-sm w-1/2">
    <img src="/me.jpg" class="object-cover h-full w-full border border-white/25 rounded" />
  </div>
</section>

---
layout: two-cols
---

# What is Serverless?

<div v-click>

An execution model that allows us to run small pieces of code in response to **events**.

</div>

<div v-click>

This is how an **AWS Lambda** can be written:

```ts
export const handler = async (event, context) => {
  // do stuff
  // read/write to a database
  // process a file
  // etc.

  return {
    statusCode: 200,
    body: ''
  }
}
```

</div>


::right::

<section class="pl-8">


<div v-click>

  ## Key points

  - <img src="/thumbs-up.png" class="w-6 inline" /> Forces you to write modular code
  - <img src="/thumbs-up.png" class="w-6 inline" /> Encourages event-driven architectures
  - <img src="/thumbs-up.png" class="w-6 inline" /> Scales a lot
  - <img src="/thumbs-up.png" class="w-6 inline" /> Easily integrates with other AWS services
  - <img src="/thumbs-up.png" class="w-6 inline" /> Pay only for what you use

</div>
<div v-click>

  - <img src="/thumbs-down.png" class="w-6 inline" /> AWS tooling is horrible
  - <img src="/thumbs-down.png" class="w-6 inline" /> Difficult to debug locally
  - <img src="/thumbs-down.png" class="w-6 inline" /> Hard to use cloud services locally

</div>

</section>

---

# Meet <img src="https://d33wubrfki0l68.cloudfront.net/cc1e61abe8db8f1be699c2cf5adde992db3ab776/8d6d6/assets/lander/logo/sst.svg" class="inline h-12 -mt-3 ml-4" />

> *SST is a framework that makes it easy to build modern full-stack applications on AWS.* - [sst.dev](https://sst.dev)

<div v-click>

In other words...

</div>
<ul>
  <li v-click>
    Define your IaC code using TypeScript™️
  </li>
  <li v-click>
    Run your code locally but use real AWS services
  </li>
  <li v-click>
    Debug your code using VSCode
  </li>
  <li v-click>
    Use any other AWS services easily
  </li>
</ul>

---
layout: statement
---

# What can it do?

Let's simulate building a full-stack app.

---
transition: fade
---

# Create a stack

```ts
export function TimJS({ stack }: StackContext) {
















}
```

---
transition: fade
---

# Set up your frontend

```ts
export function TimJS({ stack }: StackContext) {










  const site = new NextjsSite(stack, "Website", {




  });
}
```

---
transition: fade
---

# Add a custom domain

```ts
export function TimJS({ stack }: StackContext) {










  const site = new NextjsSite(stack, "Website", {
    customDomain: "timjs.ro",



  });
}
```

---
transition: fade
---

# Add an API

```ts {|5|6-8|14-16}
export function TimJS({ stack }: StackContext) {


  const api = new Api(stack, 'Api', {
    customDomain: "api.domain.com",
    routes: {
      "GET /notes": "src/list.main",
    },

  })

  const site = new NextjsSite(stack, "Website", {
    customDomain: "timjs.ro",
    environment: {
      NEXT_PUBLIC_API_URL: api.customDomainUrl,
    }
  });
}
```


---

# Add a secret

```ts {2|9|}
export function TimJS({ stack }: StackContext) {
  const stripeSecret = new Config.Secret(stack, 'StripeSecret')

  const api = new Api(stack, 'Api', {
    customDomain: "api.domain.com",
    routes: {
      "GET /notes": "src/list.main",
    },
    bind: [stripeSecret]
  })

  const site = new NextjsSite(stack, "Website", {
    customDomain: "timjs.ro",
    environment: {
      NEXT_PUBLIC_API_URL: api.customDomainUrl,
    }
  });
}
```

<div v-click class="absolute top-20 right-14 w-1/3">

Use the secret in your lambdas with type-safety!


```ts
console.log(Config.StripeSecret)
// No additional code needed
```

</div>

---
layout: two-cols
---

## Add authentication

<v-clicks>

Set up your IaC code:

```ts {|7-11|13-16}
import { Auth } from "sst/constructs";

export function TimJS({ stack }: StackContext) {

  const api = ...

  const auth = new Auth(stack, "auth", {
    authenticator: {
      handler: "src/auth.handler",
    },
  });

  auth.attach(stack, {
    api,
    prefix: "/auth",
  });
}
```

</v-clicks>

::right::

<v-clicks>

## Define an Auth Handler

```ts {|3-6}
export const handler = AuthHandler({
  providers: {
    google: GoogleAdapter({
      ... // omitted for brevity
    }),
  },
});
```

## Get the user session

```ts {|5|9}
import { ApiHandler } from "sst/node/api";
import { useSession } from "sst/node/auth";

export const needsAuthHandler = ApiHandler(async (event) => {
  const session = useSession();

  return {
    statusCode: 200,
    body: session.properties.userID,
  };
});
```

</v-clicks>

---

# Files, Databases, Jobs, Event Buses, Websockets...

<div class="flex space-x-8">

<div v-click class="w-1/2">

```ts {lines=false}
new Bucket(stack, "public");

new EventBus(stack, "bus", {
  defaults: {
    retries: 10,
  },
});

new Queue(stack, "queue", {
  consumer: "src/consumer.handler",
});

new Cron(stack, "Cron", {
  schedule: "cron(15 10 * * ? *)",
  job: "src/lambda.main",
});
```

</div>

<div v-click class="w-1/2">

```ts {lines=false}
new Table(stack, "counter", {
  fields: {
    counter: "string",
  },
  primaryIndex: { partitionKey: "counter" },
});

new RDS(stack, "db", {
  engine: "postgresql11.13",
  defaultDatabaseName: "MyDatabase",
});

new WebSocketApi(stack, "Api", {
  routes: {
    $connect: "src/connect.main",
    $default: "src/default.main",
    $disconnect: "src/disconnect.main",
    sendMessage: "src/sendMessage.main",
  },
});
```


</div>

</div>

---

# Or any other AWS service!

---

# Live Lambda Development

---

# The SST Console

---

# Other great things...

---

# Go build.

---
layout: statement
---

# Thank you.
