<template>
  <div id="app" class="app">
    <h1>{{ restaurantName }}</h1>
    <p class="description">
      Bienvenue dans notre café {{ restaurantName }}! Nous sommes réputés pour
      notre pain et nos merveilleuses pâtisseries. Faites vous plaisir dès le
      matin ou avec un goûter réconfortant. Mais attention, vous verrez qu'il
      est difficile de s'arrêter.
    </p>

    <section class="menu">
      <h2>Menu</h2>
      <div v-for="item in simpleMenu" :key="item.name" class="menu-item">
        <MenuItem 
          :name="item.name" 
          :inStock="item.inStock" 
          :quantity="item.quantity" 
          :imageSrc="item.image.src"
          :imageAlt="item.image.alt" 
          @addItem="addToShoppingCart(item.quantity)"
        />
      </div>
    </section>

    <aside class="shopping-cart">
      <h2>Panier d'achat : {{ shoppingCart }} articles</h2>
    </aside>

    <footer class="footer">
      <p>{{ copyright }}</p>
    </footer>
  </div>
</template>

<script>
import MenuItem from '../components/MenuItem.vue'

export default {
  name: 'HomeView',
  components: {
    MenuItem
  },
  data() {
    return {
      restaurantName: "La belle vue",
      shoppingCart: 0,
      simpleMenu: [
        {
          name: "Croissant",
          image: {
            src: "/images/croissant.jpg",
            alt: "Un croissant"
          },
          inStock: true,
          quantity: 1
        },
        {
          name: "Baguette de pain",
          image: {
            src: "/images/french-baguette.jpeg",
            alt: "Quatre baguettes de pain"
          },
          inStock: true,
          quantity: 1
        },
        {
          name: "Éclair",
          image: {
            src: "/images/eclair.jpg",
            alt: "Éclair au chocolat"
          },
          inStock: false,
          quantity: 1
        }
      ]
    }
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear()

      return `Copyright ${this.restaurantName} ${currentYear}`
    }
  },
  methods: {
    addToShoppingCart(amount) {
      this.shoppingCart += amount
    }
  }
}
</script>

<style>
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .description {
    max-width: 960px;
    font-size: 1.2rem;
    margin: 0 auto;
  }

  .footer {
    text-align: center;
    font-style: italic;
  }

  .menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
