// Component dengan Slot
// Slot memungkinkan parent component memasukkan konten ke child component

// Component 1: Default Slot - Slot tanpa nama
const DefaultCard = {
  template: `
    <div class="card default-slot">
      <div class="card-header">
        <h4>Default Slot Card</h4>
      </div>
      <div class="card-body">
        <!-- Default slot: konten yang dimasukkan dari parent akan muncul di sini -->
        <slot></slot>
      </div>
    </div>
  `
};

// Component 2: Named Slot - Slot dengan nama spesifik
const NamedCard = {
  template: `
    <div class="card named-slot">
      <div class="card-header">
        <!-- Named slot "header" -->
        <slot name="header"></slot>
      </div>
      <div class="card-body">
        <!-- Named slot "body" -->
        <slot name="body"></slot>
      </div>
      <div class="card-footer">
        <!-- Named slot "footer" -->
        <slot name="footer"></slot>
      </div>
    </div>
  `
};

// Component 3: Slot dengan Konten Default
const CardWithDefault = {
  template: `
    <div class="card default-content">
      <div class="card-body">
        <!-- Jika parent tidak memasukkan konten, gunakan konten default -->
        <slot>
          <p class="default-message">Ini adalah konten default. Parent bisa menggantinya dengan konten khusus.</p>
        </slot>
      </div>
    </div>
  `
};

// Component 4: Multiple Named Slots - Banyak slot dengan nama berbeda
const ArticleLayout = {
  template: `
    <article class="article-card">
      <header class="article-header">
        <slot name="title"></slot>
        <div class="article-meta">
          <slot name="author"></slot>
        </div>
      </header>
      <main class="article-content">
        <slot name="content"></slot>
      </main>
      <footer class="article-footer">
        <div class="article-tags">
          <slot name="tags"></slot>
        </div>
      </footer>
    </article>
  `
};

// Registrasi dan mount aplikasi
const app = Vue.createApp({
  components: {
    'default-card': DefaultCard,
    'named-card': NamedCard,
    'card-with-default': CardWithDefault,
    'article-layout': ArticleLayout
  }
}).mount('#app');

