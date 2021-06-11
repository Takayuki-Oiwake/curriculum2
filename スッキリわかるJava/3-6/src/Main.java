
public class Main {
	public static void main(String[] args) {
		System.out.println("数あてゲーム");
		int ans = new java.util.Random().nextInt(9);
		for (int i = 0; i<5; i++) {
			System.out.println("0~9の数字を入力してください");
			int num = new java.util.Scanner(System.in).nextInt();
			if (num==ans) {
				System.out.println("アタリ！");
			}else if (num!=ans) {
				System.out.println("違います");
			}
		}
	}
}
