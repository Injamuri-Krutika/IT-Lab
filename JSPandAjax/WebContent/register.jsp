<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import ="java.sql.*" %>
<% 

response.setContentType("text/html");
String email = request.getParameter("emailId");
String firstName = request.getParameter("firstName");
String gender = request.getParameter("gender");
String password = request.getParameter("password");
String date = request.getParameter("date");
String address = request.getParameter("address");

String aadhar = request.getParameter("aadhar");
String phoneNumber = request.getParameter("phoneNumber");


System.out.println(email);

try {

  Class.forName("com.mysql.jdbc.Driver");
  Connection con = DriverManager.getConnection("jdbc:mysql://localhost/scis?user=root&password=passwd@123");

  PreparedStatement ps = con.prepareStatement("insert into users values(?,?,?,?,?,?,?,?)");

  ps.setString(1, email);
  ps.setString(2, firstName);
  ps.setString(3, gender);
  ps.setString(4, password);
  ps.setString(5, date);
  ps.setString(6, address);
  ps.setString(7, aadhar);
  ps.setString(8, phoneNumber);	

  int i = ps.executeUpdate();
  if (i > 0)
	  out.write("Successfully Registered!!"+"<a href='login.html'>Go to Login</a>");
  else {
	  out.write("Failed to Register!!");
  }

} catch (Exception e2) {
  System.out.println(e2);
}

%>