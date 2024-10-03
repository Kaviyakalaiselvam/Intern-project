import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class GameServlet extends HttpServlet {

    private static final String DB_URL = "jdbc:mysql://localhost:3306/game_db";
    private static final String DB_USER = "root";
    private static final String DB_PASSWORD = "password";

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String player1 = req.getParameter("player1");
        String player2 = req.getParameter("player2");
        int player1Score = Integer.parseInt(req.getParameter("player1Score"));
        int player2Score = Integer.parseInt(req.getParameter("player2Score"));

        try (Connection conn = DriverManager.getConnection(DB_URL, DB_USER, DB_PASSWORD)) {
            String sql = "INSERT INTO game_results (player1, player2, player1Score, player2Score) VALUES (?, ?, ?, ?)";
            PreparedStatement stmt = conn.prepareStatement(sql);
            stmt.setString(1, player1);
            stmt.setString(2, player2);
            stmt.setInt(3, player1Score);
            stmt.setInt(4, player2Score);
            stmt.executeUpdate();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
``
