var myApp = angular.module('myApp', []);

// CONFIGURAÇÃO ROTAS
app.config(function ($routeProvider, $locationProvider) {
    // remove o # da url
    $locationProvider.html5Mode(true);

    var baseUrl = 'http://localhost:55475/Noticias/';

    $routeProvider

        .when('/', {
            templateUrl: baseUrl + 'Index',
            controller: 'homeCtrl'
        })
        // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
        //.when('/', {
        //    templateUrl: 'app/views/home.html',
        //    controller: 'HomeCtrl',
        //})

        // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
        .when('/allnews', {
            templateUrl: baseUrl + 'AllNews',
            controller: 'noticiasCtrl',
        })

        // para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
        .when('/contato', {
            templateUrl: baseUrl + 'Contatos',
            controller: '',
        })

        .when('/detalheNoticia', {
            templateUrl: baseUrl + 'DetalhesNoticia',
            controller: 'detalhesNoticiaCtrl',
        })

        // caso não seja nenhum desses, redirecione para a rota '/'
        .otherwise({ redirectTo: '/' });
});

// CONTROLLERS
myApp.controller('crudController', ['$scope', '$http', function ($scope, $http) {

    $scope.titulo = 'MY APP';

    /*var livroA = {nome: 'adasd', resumo: 'dflkslkjlfgfl'};
    var livroB = {nome: 'klkjhk', resumo: 'bncbcvbcvb'};
    var livroC = {nome: 'rtyrty', resumo: 'iopiopilçkl.'};*/

    $scope.tbLivros = [];

    $scope.addLivro = function () {

        if (validarForm()) {
            var novoLivro = { nome: $scope.txtNome, resumo: $scope.txtResumo }

            debugger;

            $scope.tbLivros.push(novoLivro);

            //$http.post('api/Livro/AddLivro', { livro: novoLivro}).then(function (response) {

            //    debugger;
            //    // deu certo
            //    console.log(response);

            //}, function (response) {
            //    // ocorreu algum erro
            //    console.log(response);
            //});
            $http({

                method: 'POST',
                url: 'api/Livro/AddLivro',
                data: { 'livro': novoLivro }

            }).then(function successCallback(response) {

                $scope.tbLivros.push(novoLivro);
                alert("User has created Successfully")

            }, function errorCallback(response) {

                alert("Error. while created user Try Again!");

            });

            limparForm();
        }
    }

    $scope.selecionarItem = function (asfasd, index) {
        $scope.indexItemSelecionado = index;
        $scope.txtNome = asfasd.nome;
        $scope.txtResumo = asfasd.resumo;
    }

    $scope.edit = function () {
        if (validarForm()) {
            $scope.tbLivros[$scope.indexItemSelecionado].nome = $scope.txtNome;
            $scope.tbLivros[$scope.indexItemSelecionado].resumo = $scope.txtResumo;

            limparForm();
        }
    }

    $scope.excluir = function () {
        if (validarForm()) {
            $scope.tbLivros.splice($scope.indexItemSelecionado, 1);
            limparForm();
        }
    }

    function limparForm() {
        $scope.txtNome = '';
        $scope.txtResumo = '';
    }

    function validarForm() {

        if (!$scope.txtNome || !$scope.txtResumo) {
            alert('Formulário inválido!');
            return false;
        }

        return true;
    }


    $scope.obterLivros = function () {

        $http.get('api/Livro/ObterLivros').then(function (response) {

            debugger;
            // deu certo
            $scope.tbLivros = response.data;
            console.log(response);

        }, function (response) {
            // ocorreu algum erro
            console.log(response);
        });
    }

    $scope.obterNoticias = function () {

        $http.get('api/Values/Get').then(function (response) {

            debugger;
            // deu certo
            $scope.tbNoticias = response.data;
            console.log(response);

        }, function (response) {
            // ocorreu algum erro
            console.log(response);
        });
    }

    $scope.obterNoticias();

}]);


myApp.controller('homeCtrl', ['$scope', '$http', function ($scope, $http) {
    
    $scope.obterNoticiaPrincipal = function () {

        $http.get('http://localhost:55475/api/NoticiasApi/ObterNoticiaPrincipal').then(function (response) {

            debugger;
            // deu certo
            $scope.noticiaPrincipal = response.data;


        }, function (response) {
            // ocorreu algum erro
            console.log(response);
        });
    }

    $scope.obterNoticiaPrincipal();


}]);

myApp.controller('noticiasCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.obterNoticias = function () {

        $http.get('http://localhost:55475/api/NoticiasApi/ObterNoticias').then(function (response) {

            debugger;
            // deu certo
            $scope.tbNoticias = response.data;
            

        }, function (response) {
            // ocorreu algum erro
            console.log(response);
        });
    }

    $scope.obterNoticias();

}]);

myApp.controller('detalhesNoticiaCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.obterNoticiaSelecionada = function () {
        debugger;
        var noticiaId = $scope.$parent.noticiaId;
        $http.get('http://localhost:55475/api/NoticiasApi/ObterNoticiaSelecionada', { params:{ noticiaId: noticiaId } }).then(function (response) {

            debugger;
            // deu certo
            $scope.noticia = response.data;
        }, function (response) {
            // ocorreu algum erro
            console.log(response);
        });
    }

    $scope.obterNoticiaSelecionada();

}]);