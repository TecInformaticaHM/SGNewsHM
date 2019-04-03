var myApp = angular.module('myApp', []);

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


myApp.controller('home', ['$scope', '$http', function ($scope, $http) {
    
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

myApp.controller('noticias', ['$scope', '$http', function ($scope, $http) {
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