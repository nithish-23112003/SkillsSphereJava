package Web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/student")
public class Student extends HttpServlet {
 public void service(HttpServletRequest req,HttpServletResponse res) throws IOException {
	 String name=req.getParameter("name");
	 int roll=Integer.parseInt(req.getParameter("roll"));
	 double m1=Double.parseDouble(req.getParameter("m1"));
	 double m2=Double.parseDouble(req.getParameter("m2"));
	 double m3=Double.parseDouble(req.getParameter("m3"));
	 double total=m1+m2+m3;
	 double avg=total/3;
	 double percentage=(total/300)*100;
	 PrintWriter print=res.getWriter();
	 print.println("<h1>Student name is :"+" "+name+"</h1>");
	 print.println("<h1>Student RollNo is :"+" "+roll+"</h1>");
	 print.println("<h3>Student Subject1 marks is :"+" "+m1+"</h3>");
	 print.println("<h3>Student Subject2 marks is :"+" "+m2+"</h3>");
	 print.println("<h3>Student Subject3 marks is :"+" "+m3+"</h3>");
	 print.println("<h3>Student total marks is :"+" "+total+"</h3>");
	 print.println("<h3>Student average marks is :"+" "+avg+"</h3>");
	 print.println("<h3>Student Percentage is :"+" "+percentage+"</h3>");
	 
	 if(percentage>40) {
		 print.println("Stuent is Passed");
	 }else {
		 print.println("Stuent is failed");
	 }
 }
}
