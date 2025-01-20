import { Link } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Grid, Paper } from "@mui/material";

const LandingPage = () => {
    return (
        <div className="landing-container">
            {/* Header */}
            <AppBar position="sticky" sx={{ backgroundColor: "#5474A5" }}>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        EcoShelf
                    </Typography>
                    <Button color="inherit" href="#home">Home</Button>
                    <Button color="inherit" href="#features">Funcionalidades</Button>
                    <Button color="inherit" href="#contact">Contato</Button>
                    <Link to="/admin">
                        <Button color="inherit">CRUD</Button>
                    </Link>
                </Toolbar>
            </AppBar>

            {/* Hero Section */}
            <Grid id="home" sx={{
                backgroundColor: "#00A676",
                color: "white",
                padding: "100px 20px",
                textAlign: "center"
            }}>
                <Typography variant="h3" paragraph>
                    Gerencie os prazos de validade da sua casa com facilidade
                </Typography>
                <Typography variant="h6" paragraph>
                    O EcoShelf organiza seus alimentos e envia alertas para você nunca mais desperdiçar comida!
                </Typography>
                <Button variant="contained" color="primary" size="large" sx={{
                    backgroundColor: "#5474A5",
                    ":hover": { backgroundColor: "#3F3F37" }
                }}>
                    Comece agora
                </Button>
            </Grid>

            {/* Features Section */}
            <Grid id="features" sx={{
                padding: "60px 20px",
                textAlign: "center",
                backgroundColor: "#FCFAFA"
            }}>
                <Typography variant="h4" gutterBottom>
                    Funcionalidades
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3} sx={{
                            padding: "20px",
                            textAlign: "center"
                        }}>
                            <Typography variant="h6" color="primary">Alertas pelo WhatsApp</Typography>
                            <Typography>Receba notificações antes de os alimentos vencerem.</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3} sx={{
                            padding: "20px",
                            textAlign: "center"
                        }}>
                            <Typography variant="h6" color="primary">Visualização intuitiva</Typography>
                            <Typography>Veja todos os prazos em uma interface clara e simples.</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper elevation={3} sx={{
                            padding: "20px",
                            textAlign: "center"
                        }}>
                            <Typography variant="h6" color="primary">Organização automática</Typography>
                            <Typography>Deixe o EcoShelf categorizar seus alimentos por você.</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>

            {/* Testimonials Section */}
            <Grid sx={{
                padding: "50px 20px",
                backgroundColor: "#5474A5",
                color: "white",
                textAlign: "center"
            }}>
                <Typography variant="h4" gutterBottom>
                    O que nossos usuários dizem
                </Typography>
                <Typography variant="body1">
                    "O EcoShelf mudou minha forma de gerenciar minha despensa. Nunca mais perdi alimentos!"
                </Typography>
                <Typography variant="body2" color="primary">
                    - Maria, São Paulo
                </Typography>
            </Grid>

        </div>
    );
};

export default LandingPage;
