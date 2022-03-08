# Monoschino Scraper POC

> Proof of concept to access the anime videos of the website [monoschinos2](https://monoschinos2.com)

## `fn getServers({id: ''})`

```js
(async () => {
  const data = await getServers({ id: "tokyo-ghoul-castellano-episodio-12" });
})();
```

```json
[
  { "name": "fembed", "src": "..." },
  { "name": "uqload", "src": "..." },
  {
    "name": "videobin",
    "src": "..."
  },
  {
    "name": "mp4upload",
    "src": "..."
  },
  { "name": "ok", "src": "..." }
]
```

## `fn decodeFembedURL({url: ''})`

```js
(async () => {
  const data = await decodeFembedURL({ url: "fembed url ..." });
})();
```

```json
[
  {
    "file": "...",
    "label": "480p",
    "type": "mp4"
  },
  {
    "file": "...",
    "label": "720p",
    "type": "mp4"
  }
]
```

## **:handshake: Contributing**

- Fork it!
- Create your feature branch: `git checkout -b my-new-feature`
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request

---

### **:busts_in_silhouette: Credits**

- [Chris Michael](https://github.com/ChrisMichaelPerezSantiago) (Project Leader, and Developer)

---

### **:anger: Troubleshootings**

This is just a personal project created for study / demonstration purpose and to simplify my working life, it may or may
not be a good fit for your project(s).

---

### **:heart: Show your support**

Please :star: this repository if you like it or this project helped you!\
Feel free to open issues or submit pull-requests to help me improving my work.

---

### **:robot: Author**

_*Chris M. Perez*_

> You can follow me on
> [github](https://github.com/ChrisMichaelPerezSantiago)&nbsp;&middot;&nbsp;[twitter](https://twitter.com/Chris5855M)

---

Copyright ©2022 [Monoschino Scraper POC](https://github.com/ChrisMichaelPerezSantiago/monoschino).
