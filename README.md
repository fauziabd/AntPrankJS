# AntPrankJS 🐜

AntPrankJS is a lightweight, customizable JavaScript library that adds a touch of whimsy to your web projects by unleashing a swarm of digital ants that crawl across the screen. Perfect for nature-themed websites, engaging user experiences, or just for fun!

## Features

- 🐜 Realistic ant movement patterns
- 🎨 Customizable ant appearance (color and size)
- 🔢 Adjustable ant population and spawn rate
- 🪶 Lightweight and easy to implement
- 🌐 Compatible with most modern websites

## Installation

You can include AntPrankJS directly in your HTML file using jsDelivr CDN:

```html
<script src="https://cdn.jsdelivr.net/gh/fauziabd/AntPrankJS@main/antprank.js"></script>
```

## Usage

After including the script, initialize AntPrankJS with your desired configuration:

```html
<script>
    initAntWalker({
        maxAnts: 64,
        antColor: "#4B3621",
        antSize: 12,
        addInterval: 30000
    });
</script>
```

## Configuration Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `maxAnts` | number | 64 | Maximum number of ants on the screen |
| `antColor` | string | "#4B3621" | Color of the ants (any valid CSS color) |
| `antSize` | number | 12 | Base size of the ants in pixels |
| `addInterval` | number | 30000 | Interval (in milliseconds) at which new ants are added |

## Examples

### Basic Implementation

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AntPrankJS Demo</title>
</head>
<body>
    <h1>Welcome to my website!</h1>
    <p>Can you spot the ants?</p>

    <script src="https://cdn.jsdelivr.net/gh/fauziabd/AntPrankJS@main/antprank.js"></script>
    <script>
        initAntWalker({
            maxAnts: 32,
            antColor: "#000000",
            antSize: 10,
            addInterval: 15000
        });
    </script>
</body>
</html>
```

### Customizing Ant Behavior

You can create different ant behaviors by adjusting the configuration:

```javascript
// Fast-moving red ants
initAntWalker({
    maxAnts: 100,
    antColor: "#FF0000",
    antSize: 8,
    addInterval: 5000
});

// Slow-moving giant ants
initAntWalker({
    maxAnts: 10,
    antColor: "#8B4513",
    antSize: 24,
    addInterval: 60000
});
```

## Demo and Configurator

Visit our [demo page](https://fauziabd.github.io/AntPrankJS/) to see AntPrankJS in action and use the configurator to generate custom code for your website.

## Contributing

We welcome contributions to AntPrankJS! Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Inspired by the industrious nature of real ants
- Thanks to all contributors and users of AntPrankJS

## Support

If you encounter any problems or have any questions, please open an issue in this repository.

---

Enjoy watching your digital ants crawl across the web! 🐜🌐