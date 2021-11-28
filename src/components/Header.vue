<template>
<div>
  <header>
    <div class="navbar navbar-default">
      <div class="navbar-header">
        <h1>
          <router-link :to="{name: 'iMain'}">
            {{ sitename }}
          </router-link>
        </h1>
      </div>
      <div class="nav navbar-nav navbar-right cart">
        <div v-if="!mySession">
          <button type="button"
            class="btn btn-default btn-lg"
            @click="signIn">
            Sign In
          </button>
        </div>
        <div v-else>
          <button type="button" 
            class="btn btn-default btn-lg"
            @click="signOut">
            <img :src="mySession.photoURL" class='photo'>
            Sign Out
          </button>
        </div>
      </div>
      <div class="nav navbar-nav navbar-right cart">
        <router-link active-class="active" tab="button" class="btn btn-default btn-lg" :to="{name: 'Form'}">
          <span class="glyphicon glyphicon-shopping-cart">
            {{cartItemCount}}
          </span>
          Checkout
        </router-link>
      </div>
    </div>
  </header>
</div>

</template>
<script>
import firebase from 'firebase/compat/app';
import {getAuth, onAuthStateChanged,signInWithPopup, signOut, GoogleAuthProvider} from "firebase/auth"
    export default {
      name: 'my-header',
      data() {
          return {
            sitename: "Vue.js Pet Depot",
          }
        },
        props: ['cartItemCount'],
        beforeCreate() {
          const auth = getAuth();
          onAuthStateChanged(auth, (user) => {
            this.$store.commit('SET_SESSION', user || false)
          });
        },
        methods: {
          
    showCheckout() {
      this.$router.push({name: 'Form'});
    },
    signIn() {
      const auth = getAuth();
      let provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider).then(function(result) {
        console.log('signed in!');
      }).catch(function(error){
        console.log('error ' + error)
      });
    },
    signOut() {
      const auth = getAuth();
      signOut(auth).then(function() {
        // Sign-out successful.
        console.log("signed out!")
      }).catch(function(error) {
        console.log("error in sign out!")
        // An error happened.
      });
    }
  },
  computed: {
    mySession() {
      return this.$store.getters.session;
    }
  }
      }
  </script>


<style scoped>
  a {
    text-decoration: none;
    color: black;
  }
  .photo {
    width: 25px;
    height: 25px;
  }
  .router-link-exact-active {
    color: blue;
  }
</style>