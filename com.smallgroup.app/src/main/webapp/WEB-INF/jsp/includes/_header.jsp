<%@ page contentType="text/html" pageEncoding="UTF-8" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>

<html>
<head>
    <title>Welcome to Small Group Application</title>
    <%--META DATA--%>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <%--<meta name="description" content="">--%>
    <%--<meta name="author" content="">--%>

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <%--PAGE LINKED RESOURCES--%>
    <%--Jquery--%>
    <c:url value="/webjars/jquery/2.1.4/jquery.min.js" var="jquery"/>
    <script src="${jquery}"></script>

    <%--&lt;%&ndash;Bootstrap&ndash;%&gt;--%>
    <%--<c:url value="/webjars/bootstrap/3.3.4/css/bootstrap.min.css" var="bootstrapCSS"/>--%>
    <%--<link rel="stylesheet" href="${bootstrapCSS}" media="screen"--%>

    <%--CUSTOM BOOTSWATCH--%>
    <c:url value="/static/css/bootswatch.css" var="bootstrapCSS"/>
    <link rel="stylesheet" href="${bootstrapCSS}" media="screen"/>

    <c:url value="/webjars/bootstrap/3.3.4/js/bootstrap.js" var="bootstrapJS"/>
    <script src="${bootstrapJS}"></script>

    <%--font-awesome--%>
    <c:url value="/webjars/font-awesome/4.7.0/css/font-awesome.css" var="fontawesomeCSS"/>
    <link rel="stylesheet" href="${fontawesomeCSS}" media="screen"/>

    <%--custom CSS--%>
    <c:url value="/static/css/custom-styles.css" var="customCSS"/>
    <link rel="stylesheet" href="${customCSS}" media="screen"/>

    <c:url value="/static/css/sb-admin-2.css" var="sbAdminCSS"/>
    <link rel="stylesheet" href="${sbAdminCSS}" media="screen"/>

    <%--google fonts--%>
    <link href='https://fonts.googleapis.com/css?family=Oswald:400,700|Roboto+Condensed' rel='stylesheet'
          type='text/css'>
</head>
<body>