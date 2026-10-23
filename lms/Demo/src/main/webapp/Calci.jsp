<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Calculator</title>
</head>
<body>

<h1>Calculator</h1>

<form action="Calculator.jsp" method="get">

    <%
        int a = 100;
        int b = 10;
        String value = request.getParameter("call");
        int res = 0;

        if (value != null) {
            if (value.equals("add")) {
                res = a + b;
            } 
            else if (value.equals("sub")) {
                res = a - b;
            } 
            else if (value.equals("mul")) {
                res = a * b;
            } 
            else if (value.equals("div")) {
                res = a / b;
            }
        }
    %>

    <select name="call">
        <option value="add">Addition</option>
        <option value="sub">Subtraction</option>
        <option value="mul">Multiplication</option>
        <option value="div">Division</option>
    </select>

    <button type="submit">Calculate</button>

    <%
        if (value != null) {
    %>
        <h2>Result: <%= res %></h2>
    <%
        }
    %>

</form>

<br>

<button><a href="index1.jsp">Index</a></button><br>
<button><a href="Register.jsp">Register</a></button><br>
<button><a href="Profile.jsp">Profile</a></button><br>
<button><a href="images.jsp">Images</a></button><br>

</body>
</html>