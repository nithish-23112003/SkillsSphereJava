package Exception1;

public class AgeException extends Exception {
	public AgeException(String msg) {
		super(msg);
	}
	public static void checkAge(int age) {
		try {
			if(age<16) {
				throw new AgeException("no valid");
			}
			System.out.println("age is valid");
		}catch(AgeException e) {
			e.printStackTrace();
		}
		
	}
	public static void main(String[] args) {
		checkAge(15);
		System.out.println("dfghj");
	}

}
