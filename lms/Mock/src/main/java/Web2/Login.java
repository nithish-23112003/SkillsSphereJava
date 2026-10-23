package Web2;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/login")
public class Login extends HttpServlet {
	public void service(HttpServletRequest req,HttpServletResponse res) throws IOException {
		String uname=req.getParameter("name");
		String pass=req.getParameter("pass");
		PrintWriter print=res.getWriter();
		if("admin".equals(uname) && "admin123".equals(pass)) {
			print.println("<h1>Login successfull</h1>");
		}else {
			print.println("<h1>inavlid username or password</h1>");
		}
	}
	

}
