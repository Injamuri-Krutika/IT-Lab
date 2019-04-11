<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import ="java.sql.*" %>
<% 
response.setContentType("text/html");
String uname = request.getParameter("firstName");
try {

  Class.forName("com.mysql.jdbc.Driver");
  Connection con = DriverManager.getConnection("jdbc:mysql://localhost/scis?user=root&password=passwd@123");
  PreparedStatement ps = con.prepareStatement("select * from users where first_name=?;");
  ps.setString(1, uname);

  ResultSet res =  ps.executeQuery();
  
  if (res.next())
	  out.write("Present");
  else
	  out.write("Absent");

} catch (Exception e2) {
	e2.printStackTrace();
}

%>