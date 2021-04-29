<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.util.*,java.text.SimpleDateFormat"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	<div style="background-color: gray; width:100%">
		<label style="display: inline-block; padding: 10px; color: white ">login</label>
		<label>
			<% Date date = new Date();
     		 SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
    		 String formatDate = sdf.format(date);%>
  			<%= formatDate %>
		</label>
	</div>
</body>
</html>