<template>
  <div>
    <my-header :cartItemCount="cartItemCount"></my-header>
        <div class="row">
          <div class="col-md-10 col-md-offset-1">
            <div class="panel panel-info">
              <div class="pane-heading">Pet Dept Chackout</div>
              <div class="panel-body">
                <div class="form-group">
                  <div class="col-md-12">
                    <h4><strong>Enter Your Infornation</strong></h4>
                  </div>
                    <div class="form-group">
                      <div class="col-md-6">
                        <strong>First Name</strong>
                        <input type="text" v-model.trim="order.firstName" class="form-control">
                      </div>
                      
                    </div>
                    <div class="form-group">
                      <div class="col-md-6">
                        <strong>Last Name</strong>
                        <input type="text" v-model.trim="order.lastName" class="form-control">
                      </div>
                    </div>
                  <div class="form-group">
                    <div class="col-md-12"><strong>Address:</strong></div>
                    <div class="col-md-12">
                      <input type="text" v-model.trim="order.address" class="form-control" />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-12"><strong>City:</strong></div>
                    <div class="col-md-12">
                      <input type="text" v-model.trim="order.city" class="form-control" />
                    </div>
                  </div>
                    <div class="form-group">
                    <div class="col-md-2">
                      <strong>State:</strong>
                      <select v-model="order.state" class="form-control">
                        <option disabled value="">State</option>
                        <option v-for="(state,key) in states" v-bind:value="state" :key="state">
                          {{key}}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-6 col-md-offset-4">
                      <strong>Zip / Postal Code:</strong>
                      <input v-model.number="order.zip"
                        class="form-control" type="number">
                    </div>
                  </div>
                  
                  <div class="form-group">
                    <div class="col-md-6 boxes">
                      <input type="checkbox"
                      id="gift" value='true'
                      v-bind:true-value="order.sendGift"
                      v-bind:false-value="order.dontSendGift"
                      v-model="order.gift">
                      <label for="checkbox">Ship As Gift?</label>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-md-6 boxes">
                      <input type="radio"
                      id="home"
                      v-bind:value="order.home"
                      v-model="order.method">
                    <label for="home">Home</label>
                      <input type="radio"
                        id="business"
                        v-bind:value="order.business"
                        v-model="order.method">
                      <label for="business">Business</label>
                    </div>
                  </div>

                  <div class="form-group">
                    <div class="col-md-6">
                      <button type="submit" class="btn btn-primary submit" @click="submitForm">
                        Place Order
                      </button>
                    </div>
                  </div>
                  <div class="form-group col-md-12 verify">
                    <pre>
                      First Name: {{order.firstName}}
                       Last Name: {{order.lastName}}
                         Address: {{order.address}}
                            City: {{order.city}}
                             Zip: {{order.zip}}
                           State: {{order.state}}
                          Method: {{order.method}}
                            Gift: {{order.gift}}
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
  </div>
  
</template>

<script>
  import MyHeader from './Header.vue';

export default ({
  name: 'Form',
  props: ['cartItemCount'],
  data() {
    return {
      states: {
        AL: 'Alabama',
        AK: 'Alaska',
        AR: 'Arizona',
        CA: 'California',
        NV: 'Nevada'
      },
      order: {
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        zip: '',
        state: '',
        method: 'Home Address',
        business: 'Business Address',
        home: 'Home Address',
        gift:'',
        sendGift: 'Send As A Gift',
        dontSendGift: 'Do Not Send As A Gift'
      }
    }
  },
  components: { MyHeader },
  methods: {
      submitForm() {
        alert('Submitted');
      }
  }
})
</script>

<style scoped>
</style>
