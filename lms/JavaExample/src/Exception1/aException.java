package Exception1;

public class aException extends RuntimeException {
	public aException(String msg) {
		super(msg);
	}
	public static void checkAge(int age) {
		if(age<16) {
			throw new aException("not valid");
		}
		
	}
	public static void main(String[] args) {
		try {
			checkAge(15);
		}catch(aException e) {
			e.printStackTrace();
		}
		
		System.out.println("enter your name");
	}

}
