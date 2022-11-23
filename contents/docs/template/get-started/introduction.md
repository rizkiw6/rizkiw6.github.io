---
---

# Introduction

Dalam pengembangan software di lingkungan waresix. Kami para developer menggunakan satu bahasa desain yang sama yang telah didefinisikan oleh para desainer kami.
Jadi komponen desain yang kami gunakan akan sama di semua platformnya baik itu web maupun mobile.

Pustaka ini ditujukan untuk para android developer di lingkungan waresix untuk menunjang kemudahan dan kekonsistenan desain pada setiap komponennya. Dengan adanya pustaka ini
diharapkan dapat meningkatkan produktivitas para developer dan menjaga kekonsistenan desain di setiap aplikasi, halaman, dan komponen di dalam aplikasi.

# Getting started

To start, please add the code below on `gradle.properties`.

```groovy
authToken={YOUR_TOKEN}
```

please contact your Team Leader for the token.

And then add the repository by using private jitpack repository on your project level `build.gradle`.

```groovy
...
allprojects {
    repositories {
        google()
        mavenCentral()
        maven {
            url "https://jitpack.io"
            credentials { username authToken }
        }
        jcenter()
    }
}
...
```

Now you can connect to our private jitpack repository and download our ui component library by adding the code below
on module level `build.gradle`

```kotlin
implementation("com.github.waresix.waresix-android-library:lib-ui-component:1.0.6")
```

Sync the project with gradle file, wait until the sync process is finished and now waresix ui component library is ready to use.
