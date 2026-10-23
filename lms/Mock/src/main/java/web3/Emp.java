package web3;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/emp")
public class Emp extends HttpServlet {
	public void service(HttpServletResponse res,HttpServletRequest req) throws IOException {
		String name=req.getParameter("name");
		int id=Integer.parseInt(req.getParameter("id"));
		double sal=Double.parseDouble(req.getParameter("sal"));
		double hra=Double.parseDouble(req.getParameter("hra"));
		double da=Double.parseDouble(req.getParameter("da"));
		PrintWriter print=res.getWriter();
		print.println("Gross salary is :" +(sal+hra+da));
		
	}

}
