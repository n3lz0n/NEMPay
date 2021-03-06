class TransactionsCtrl {
    constructor(Wallet, Alert, $location, DataBridge, $scope, $filter, Transactions, NetworkRequests, $ionicLoading, $timeout,$ionicPopover) {
        'ngInject';

        // Alert service
        this._Alert = Alert;
        // Filters
        this._$filter = $filter;
        // $location to redirect
        this._location = $location;
        // Wallet service
        this._Wallet = Wallet;
        // Transaction service
        this._Transactions = Transactions;
        // DataBridge service
        this._DataBridge = DataBridge;
        this._NetworkRequests = NetworkRequests;


        //menu
        var template = '<ion-popover-view> <ion-content><div class="list"><a ui-sref="app.balance" class="item">Balance</a><a ui-sref="app.transfer" class="item">Transfer</a><a ui-sref="app.transactions" class="item">Transactions</a><a ui-sref="app.account" class="item">Account</a></div></ion-content></ion-popover-view>';

        this.popover = $ionicPopover.fromTemplate(template, {
            scope: $scope
        });

        // If no wallet show alert and redirect to home
        if (!this._Wallet.current) {
            this._Alert.noWalletLoaded();
            this._location.path('/');
        }

        if(window.Connection) {
            if(navigator.connection.type == Connection.NONE) {
            this._Alert.noInternet();
            this._location.path('/');

            }
        }

       /* $ionicLoading.show();

        $timeout(function () {
            $ionicLoading.hide();
        }, 1000);*/



        /**
         * Default Dashboard properties 
         */

        // Harvesting chart data
        this.labels = [];
        this.valuesInFee = [];
        // Helper to know if no data for chart
        this.chartEmpty = true;

        // Default tab on confirmed transactions
        this.tabConfirmed = true;

        /**
         * Watch harvested blocks in Databridge service for the chart
         */
        $scope.$watch(() => this._DataBridge.harvestedBlocks, (val) => {
            this.labels = [];
            this.valuesInFee = [];
            if (!val) {
                return;
            }
            for (let i = 0; i < val.length; ++i) {
                // If fee > 0 we push the block as label and the fee as data for the chart
                if (val[i].totalFee / 1000000 > 0) {
                    this.labels.push(val[i].height)
                    this.valuesInFee.push(val[i].totalFee / 1000000);
                }
            }
            // If nothing above 0 XEM show message
            if (!this.valuesInFee.length) {
                this.chartEmpty = true;
            } else {
                this.chartEmpty = false;
            }
        });

        //Confirmed txes pagination properties
        this.currentPage = 0;
        this.pageSize = 5;
        this.numberOfPages = function() {
            return Math.ceil(this._DataBridge.transactions.length / this.pageSize);
        }

        //Unconfirmed txes pagination properties
        this.currentPageUnc = 0;
        this.pageSizeUnc = 5;
        this.numberOfPagesUnc = function() {
            return Math.ceil(this._DataBridge.unconfirmed.length / this.pageSizeUnc);
        }

        // Harvested blocks pagination properties
        this.currentPageHb = 0;
        this.pageSizeHb = 5;
        this.numberOfPagesHb = function() {
            return Math.ceil(this._DataBridge.harvestedBlocks.length / this.pageSizeHb);
        }

    }
    /**
     * openPopover() Opens popover
     */
    openPopover(event) {
            this.popover.show(event);
    };
    
    /**
     * closePopover() Closes popover
     */
    
    closePopover() {
        this.popover.hide();
    };

    /**
     * refreshMarketInfo() Fetch data from CoinMarketCap api to refresh market information
     */
    refreshMarketInfo() {
        // Get market info
        this._NetworkRequests.getMarketInfo().then((data) => {
            this._DataBridge.marketInfo = data;
        },
        (err) => {
            // Alert error
            this._Alert.errorGetMarketInfo(); 
        });
    }

}

export default TransactionsCtrl;