package Maps;

import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.Map;
import java.util.TreeMap;

public class Mapping {
	public static void main(String[] args) {
		Map<Student,String> map=new TreeMap<>();
		map.put(new Student(1,"a"), "a");
		map.put(new Student(2,"b"), "p");
		map.put(new Student(3,"b"),map.getOrDefault(new Student(2,"b"),"z"));
//		map.put("a","gg");
//		map.put(null, null);
//		map.put(null, null);
		map.forEach((key,value)->{
			System.out.println(key+" "+value);
		});
		try {
			FileReader f=new FileReader("t.txt");
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

}
