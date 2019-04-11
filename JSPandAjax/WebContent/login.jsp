<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import ="java.sql.*" %>
<% 
response.setContentType("text/html");
System.out.println(request.getParameter("emial1"));
String uname = request.getParameter("uname");
String pass = request.getParameter("pass");

try {

  Class.forName("com.mysql.jdbc.Driver");
  Connection con = DriverManager.getConnection("jdbc:mysql://localhost/scis?user=root&password=passwd@123");
  PreparedStatement ps = con.prepareStatement("select * from users where first_name=? and password=?;");
  System.out.println(uname+":"+pass.trim());
  ps.setString(1, uname);
  ps.setString(2, pass);

  ResultSet res =  ps.executeQuery();
  
  if (res.next())
	  out.write("Success");
//	  response.sendRedirect("http://localhost:8081/SCIS_Servlet/index.html#home");
  else
	  out.write("Invalid User name or password");

} catch (Exception e2) {
	e2.printStackTrace();
}

out.close();


%>