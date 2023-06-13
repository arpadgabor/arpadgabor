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

<!--

Apar tot felul de tehnologii, unele mai bune, altele mai proaste. O tehnologie care a primit destul de multa atentie, din nou, este Serverless. Ca orice tehnologie, are si ea partile ei bune si proaste. Dar astazi vreau sa vorbesc despre cum putem construi aplicatii si servicii Serverless mult mai usor.

-->

---

<section class="flex h-full space-x-8">
  <div class="p-8 w-1/2">

  # I'm Arpad.

  You can also call me *Arpi*.

  CTO @ **Webamboos**

  Doing all kinds of things.

  </div>

  <div class="p-2 rounded-lg bg-black/5 border border-black/10 backdrop-blur-sm w-1/2">
    <img src="/me.jpg" class="object-cover h-full w-full border border-white/25 rounded" />
  </div>
</section>

<!--
Ma numesc Arpad dar imi puteti spune Arpi.

Cica sunt CTO la Webamboos, un studio de dezvoltare de produse digitale aici in Timisoara.
-->

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
  - <img src="/thumbs-up.png" class="w-6 inline" /> Easily integrates with other AWS services
  - <img src="/thumbs-up.png" class="w-6 inline" /> Scales a lot
  - <img src="/thumbs-up.png" class="w-6 inline" /> Pay only for what you use

</div>
<div v-click>

  - <img src="/thumbs-down.png" class="w-6 inline" /> AWS-made tooling is horrible
  - <img src="/thumbs-down.png" class="w-6 inline" /> Difficult to debug and test locally
  - <img src="/thumbs-down.png" class="w-6 inline" /> Hard to use cloud services locally

</div>

</section>

<!-- 
Ce este Serverless?

Pe scurt, Serverless ne permite sa rulam bucati izolate de cod in raspuns la **evenimente**.

Ce consider eu sunt puncte forte la Serverless e faptul ca te forteaza sa scrii cod modular, bazat pe evenimente. In plus, se integreaza foarte usor cu alte servicii de AWS, scaleaza foarte bine chiar si pentru cei zero utilzatori pe care ii aveti, si platesti doar cat folosesti (adica nimic).

Pe de alta parte tooling-ul de pana acum de la AWS e oribil, e dificil sa testezi codul local si e dificil sa folosesti alte servicii de cloud local.

Si de asta va prezint azi SST.
-->

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

<!--
SST este un framework open-source pentru construit aplicatii serverless, full-stack pe AWS.

In alte cuvinte, poti:
- defini infrastructure-as-code direct cu typescript
- poti rula lambda-uri direct la tine local ca si cum ar fi in cloud
- poti face debug la lambda-uri folosit editorul tau preferat
- poti folosi orice alt serviciu AWS fara sa ii faci mock.
-->

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

<!--
Sa zicem ca facem un site pentru TimJS. Definim intai un "Stack".
-->

---
transition: fade
---

# Set up your frontend

```ts
export function TimJS({ stack }: StackContext) {





  //               StaticSite
  //               SolidStartSite
  //               SvelteKitSite
  //               RemixSite
  //               AstroSite
  const site = new NextjsSite(stack, "Website", {




  });
}
```

<!--
Dupa care adaugam definitia pentru resursele necesare sa facem deploy la un site de NextJS.

SST are suport si pentru site-uri statice simple, gen Vue, React, Angular, etc., sau pentru Astro, SolidStart, SvelteKit, sau Remix.
-->

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

<!--
Adaugam un domeniu
-->

---
transition: fade
---

# Add an API

```ts {|5|6-8|14-16}
export function TimJS({ stack }: StackContext) {


  const api = new Api(stack, 'Api', {
    customDomain: "api.domain.com",
    routes: {
      "GET /speakers": "src/list.main",
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

<!--
Dar vrem sa facem si un API.

- Il definim folosin construct-ul de `Api`
- ii punem un domeniu
- adaugam o ruta pentru get de speakers
- si pasam la frontend in environment URL-ul spre backend.
-->

---

# Add a secret

```ts {2|9|}
export function TimJS({ stack }: StackContext) {
  const stripeSecret = new Config.Secret(stack, 'StripeSecret')

  const api = new Api(stack, 'Api', {
    customDomain: "api.domain.com",
    routes: {
      "GET /speakers": "src/list.main",
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

Use the secret in your lambdas with ✨**type-safety**✨!


```ts
import { Config } from "sst/node/config"

console.log(Config.StripeSecret)
// No additional code needed
```

</div>

<!--
Dar vrem sa vindem si bilete cu Stripe.

- Definim un nou Secret pentru cheia de Stripe
- Si o putem bind-ui la Api

Asta ne lasa sa accesam acel secret intr-un mod Type-Safe, fara pic de cod extra. SST face totul  automagic.
-->

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

<div class="w-1/2">

<v-clicks>

```ts {lines=false}
new Bucket(stack, "public");
```

```ts {lines=false}
new EventBus(stack, "bus", {
  defaults: {
    retries: 10,
  },
});
```

```ts {lines=false}
new Queue(stack, "queue", {
  consumer: "src/consumer.handler",
});
```

```ts {lines=false}
new Cron(stack, "Cron", {
  schedule: "cron(15 10 * * ? *)",
  job: "src/lambda.main",
});
```

</v-clicks>

</div>

<div class="w-1/2">

<v-clicks>

```ts {lines=false}
new Table(stack, "counter", {
  fields: {
    counter: "string",
  },
  primaryIndex: { partitionKey: "counter" },
});
```

```ts {lines=false}
new RDS(stack, "db", {
  engine: "postgresql11.13",
  defaultDatabaseName: "MyDatabase",
});
```

```ts {lines=false}
new WebSocketApi(stack, "Api", {
  routes: {
    $connect: "src/connect.main",
    $default: "src/default.main",
    $disconnect: "src/disconnect.main",
    sendMessage: "src/sendMessage.main",
  },
});
```
</v-clicks>

</div>

</div>

---

# Or any other AWS service!

Use already existing constructs. For example:

- `aws-cdk-ses-domain-identity` to create an AWS SES domain identity and validate it
- `aws_iam.OpenIdConnectProvider` to create an IAM OIDC provider for secure deployments in CI
- `aws-cdk-lib/aws-ecs-patterns` to create a Fargate service when you need servers

Or create your own reusable constructs for common use cases.

---

# Live Lambda Development

<v-clicks>

Creates isolated **cloud environments** for each developer - no need for Local Stack, SAM, mocking, etc.

### Features

**Instant** hot-reloading of your Lambda code with `sst dev`

**Debugging** (i.e. breakpoints) with VS Code (or other IDEs)

**Supports all Lambda triggers** - easily test webhooks, queues, events, etc. with **real AWS services**

**Supports IAM** permissions just like in production

Watches for both lambda and infrastructure changes and deploys them automagically

<div>

<hr />

Read more https://docs.sst.dev/live-lambda-development

</div>

</v-clicks>

---

# The SST Console

View all your stacks in one place.

Debug lambdas, view logs, run RDS migrations, edit DynamoDB documents, and more.

![The SST Console](/sst-console.png)


---

# To recap

<v-clicks>

Serverless is great for building scalable, **event-driven** apps and services.

SST makes all of it **incredibly easy**.

SST provides lots of serverless-ready constructs ready-to-use in your apps.

Build apps fast, with confidence and type-safety.

</v-clicks>

---
layout: statement
---

# Thank you.

GitHub `@arpadgabor`

Twitter `@arpad_gabor`
