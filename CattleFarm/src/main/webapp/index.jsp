<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>

<!DOCTYPE html>


<html ng-app="CattleFarm" lang="en">
<head>
    <meta charset="UTF-8">

    <title>Bilal Cattle Farm</title>
    <link rel="stylesheet" href="<c:url value="/resources/css/tether/tether.min.css"/>">
    <link rel="stylesheet" href="<c:url value="/resources/css/bootstrap/bootstrap.min.css"/>">
    <link rel="stylesheet" href="<c:url value="/resources/css/bootstrap/bootstrap-theme.min.css"/>">
    <link rel="stylesheet" href="<c:url value="/resources/css/font-awesome/font-awesome.css"/>">
    <link rel="stylesheet" href="<c:url value="/resources/css/dashboard.css"/>">

</head>
<body ng-controller="mainController">



    <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                    <span class="sr-only">{{projectName}}</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="#">{{projectName}}</a>
            </div>
            <div id="navbar" class="navbar-collapse collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Dashboard</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Help</a></li>
                </ul>
                <form class="navbar-form navbar-right">
                    <input type="text" class="form-control" placeholder="Search...">
                </form>
            </div>
        </div>
    </nav>

    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-3 col-md-2 sidebar">
                <ul class="nav nav-sidebar">
                    <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
                    <li><a href="#">Reports</a></li>
                </ul>
                <ul class="nav nav-sidebar">
                    <li><a href="Book/farms">Farm</a></li>
                    <li><a href="Book/products">Products</a></li>
                    <li><a href="Book/tags">Tags</a></li>
                    <li><a href="Book/animals">Animals</a></li>
                    <li><a href="Book/expenseType">Expense Type</a></li>
                    <li><a href="Book/expense">Expense</a></li>
                    <li><a href="Book/stock">Stock</a></li>
                    <li><a href="Book/feedUsed">Feed Used</a></li>
                    <li><a href="Book/prices">Animal Prices</a></li>
                </ul>
            </div>
            <div ng-view></div>
            </div>
        </div>




    <script src="<c:url value="/resources/js/angular/angular.js"/>"></script>
    <script src="<c:url value="/resources/js/angular/angular-route.js"/>"></script>
    <script src="<c:url value="/resources/js/jquery/jquery-3.1.1.min.js"/>"></script>
    <script src="<c:url value="/resources/js/tether/tether.min.js"/>"></script>
    <script src="<c:url value="/resources/js/bootstrap/bootstrap.min.js"/>"></script>
    <script src="<c:url value="/resources/app/app.js"/>"></script>
</body>
</html>
