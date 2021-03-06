(function () {
    //index module
    angular.module("appModule", [
        "ngRoute",
        "ngAnimate",
        "ngCookies",
        "ui.bootstrap",
        "ui-notification"
    ]);

    //constants
    angular.module("appModule")
        .constant("systemConfig", {
            apiUrl: location.hostname === 'localhost'
                ? "http://localhost:8072"
                : location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : ""),
            master: "/api/v1/millionMeals/master"
        });

    //route config
    angular.module("appModule")
        .config(function ($routeProvider) {
            $routeProvider
            //system
                .when("/", {
                    redirectTo: "/main"
                })
                .when("/login", {
                    templateUrl: "app/system/login/login.html",
                    controller: "LoginController"
                })
                .when("/main", {
                    templateUrl: "app/main/main.html",
                    controller: "mainController"
                })
                .when("/customer", {
                    templateUrl: "app/master/customer/customer.html",
                    controller: "customerController"
                })
                .when("/table", {
                    templateUrl: "app/master/table/table.html",
                    controller: "tableController"
                })
                .when("/main-category", {
                    templateUrl: "app/master/main-category/main-category.html",
                    controller: "mainCategoryController"
                })
                .when("/category", {
                    templateUrl: "app/master/category/category.html",
                    controller: "categoryController"
                })
                .when("/sub-category", {
                    templateUrl: "app/master/sub-category/sub-category.html",
                    controller: "subCategoryController"
                })
                .when("/unit", {
                    templateUrl: "app/master/unit/unit.html",
                    controller: "unitController"
                })
                .when("/item", {
                    templateUrl: "app/master/item/item.html",
                    controller: "itemController"
                })
                .when("/ingredians", {
                    templateUrl: "app/master/ingredians/ingredians.html",
                    controller: "ingrediansController"
                })
                .when("/product", {
                    templateUrl: "app/master/product/product.html",
                    controller: "productController"
                })
                .when("/product-wise", {
                    templateUrl: "app/reports/product-wise.html",
                    controller: "reportController"
                })
                .when("/invoice-summery", {
                    templateUrl: "app/reports/invoice-summery.html",
                    controller: "reportController"
                })
                .when("/user-privilege", {
                    templateUrl: "app/master/user-privilege/user-privilege.html",
                    controller: "userPrivilegeController"
                })
                .when("/order-cancel", {
                    templateUrl: "app/transactions/order-cancel/order-cancel.html",
                    controller: "orderCancelController"
                })
                .otherwise({
                    redirectTo: "/"
                });
        });
    angular.module("appModule")
        .controller("appController", function () {

        });

}());
