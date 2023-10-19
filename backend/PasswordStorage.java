import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class PasswordStorage {
    public static void main(String[] args) {
        try {
            // Conectar ao banco de dados (substitua com as suas credenciais e URL do banco de dados)
            Connection connection = DriverManager.getConnection("jdbc:mysql://localhost/seu_banco_de_dados", "seu_usuario", "sua_senha");

            // Dados do usuário
            String email = "usuario@example.com";
            String senha = "senha_segura";

            // Crie uma instrução SQL para inserir o usuário no banco de dados
            String insertQuery = "INSERT INTO usuarios (email, senha) VALUES (?, ?)";
            PreparedStatement preparedStatement = connection.prepareStatement(insertQuery);
            preparedStatement.setString(1, email);
            preparedStatement.setString(2, senha);
            preparedStatement.executeUpdate();

            System.out.println("Usuário cadastrado com sucesso.");

            // Verificação de senha posterior (por exemplo, no momento do login)
            String senhaInformadaPeloUsuario = "senha_segura"; // A senha informada pelo usuário no momento do login

            // Consulte o banco de dados para verificar a senha
            String selectQuery = "SELECT senha FROM usuarios WHERE email = ?";
            preparedStatement = connection.prepareStatement(selectQuery);
            preparedStatement.setString(1, email);
            ResultSet resultSet = preparedStatement.executeQuery();

            if (resultSet.next()) {
                String senhaArmazenada = resultSet.getString("senha");

                if (senhaInformadaPeloUsuario.equals(senhaArmazenada)) {
                    System.out.println("Senha válida. Acesso permitido.");
                } else {
                    System.out.println("Acesso negado. Senha inválida.");
                }
            } else {
                System.out.println("Usuário não encontrado.");
            }

            // Feche a conexão com o banco de dados
            connection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
