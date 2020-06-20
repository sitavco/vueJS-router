<template>
    <div id="app">
        <div class="container">
            <h1 class="my-5 text-center">Coin Calculate App</h1>
            <form @submit.prevent="submit">
                <div class="d-flex flex-column flex-lg-row">
                    <div class="col-12 col-md-6">
                        <div class="form-group position-relative coin-left">
                            <label class="font-weight-bold" for="amountToSpend">Amount to Spend</label>
                            <input  type="number" class="form-control" id="amountToSpend" min='25' max='50000' v-model.number="amount" placeholder="Enter amount" />
                            <div class="currency-coin position-absolute">
                                <select class="form-control">
                                    <option v-for="(value, key) in currency"  v-bind:value="value"  v-bind:key="key">{{key}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="form-group position-relative coin-left">
                            <label class="font-weight-bold" for="coinsToReceive">Coins to Receive</label>
                            <input type="number" class="form-control" id="coinsToReceive" placeholder="Enter amount" />
                            <div class="currency-coin position-absolute">
                                <select class="form-control" v-model="trade">
                                    <option v-bind:value="trade">{{trade}}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-12 text-right mt-4">
                    <button class="btn btn-primary" type="submit" value="submit">Submit</button>
                </div>
            <div class="col-12 mt-5">
                <span>{{amount}} {{convertFrom}} equals to {{finalAmount}} {{trade}}</span>
            </div>
            </form>
        </div>
    </div>
</template>

<script>

import axios from "axios";
export default {
    name: 'Home',
    data() {
        return {
            currencyfrom: [{ name: 'USD' }, { name: 'EUR' }],
            convertFrom: 'USD',
            trade: 'BTC',
            amount: '',
            cryptos: [],
            activeCurrency: [],
            form: {
                name: '',
                amount: ''
            }
        };
    },
    mounted() {
        this.startAPI();
    },
    computed: {
        finalAmount: function() {
            var to = this.trade;
            var from = this.cryptos;
            var final;

            switch (from) {
                case "USD":
                    if (to == "BTC") {
                        final = this.amount * 0.84;
                    }
                    if (to == "USD") {
                        final = this.amount;
                    }
                    break;
                case "EUR":
                    if (to == "BTC") {
                        final = this.amount * 1.19;
                    }
                    break;
            }
            return final;
        }
    },
    methods: {
        startAPI() {
            axios.get("https://blockchain.info/ticker").then(response => {
                this.currency = response.data;
                console.log(this.currency);
            });
        },
        submit() {
            this.activeCurrency = [];
            this.activeCurrency.push(this.currencyfrom)
        }
    }
};
</script>

<style scoped>
    .currency-coin {
        right: 0;
        top: 32px;
    }
</style>
