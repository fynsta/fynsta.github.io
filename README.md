# fynsta.github.io

This is my personal website built with Jekyll and hosted on GitHub Pages.

## Local Development

### Prerequisites

- Ruby version 2.5.0 or higher
- RubyGems
- GCC and Make

### Setup

1. Install Jekyll and Bundler:
   ```
   gem install jekyll bundler
   ```

2. Clone this repository:
   ```
   git clone https://github.com/yourusername/yourusername.github.io.git
   cd yourusername.github.io
   ```

3. Install dependencies:
   ```
   bundle install
   ```

4. Run the local server:
   ```
   bundle exec jekyll serve
   ```

5. View your site at: 
   ```
   http://localhost:4000
   ```

## Structure

- `_layouts/`: Contains templates that wrap posts and pages
- `_includes/`: Contains reusable components for the layouts
- `_posts/`: Contains blog posts
- `_projects/`: Contains project descriptions
- `assets/`: Contains CSS, JavaScript, images, etc.
- `_config.yml`: Configuration file for your site
- `index.html`: Your homepage

## Adding Content

### Blog Posts

To add a new blog post, create a new file in the `_posts` directory with the format:
```
YYYY-MM-DD-title.md
```

Include the front matter at the top:
```yaml
---
layout: post
title: Your Post Title
date: YYYY-MM-DD
categories: [category1, category2]
---
```

### Projects

To add a new project, create a new file in the `_projects` directory with the format:
```
project-name.md
```

Include the front matter at the top:
```yaml
---
layout: project
title: Project Name
date: YYYY-MM-DD
categories: [category1, category2]
featured_image: /assets/images/projects/project-name.jpg
github: https://github.com/yourusername/project-repo
demo: https://demo-link.com
technologies: [tech1, tech2, tech3]
---
```

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch.

## License

[MIT License](LICENSE)