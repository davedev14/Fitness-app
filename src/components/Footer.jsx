import React from 'react';
import { Box, Stack, Typography, Grid, Link, IconButton, Container, Divider } from '@mui/material';
import { Instagram, YouTube, Facebook, GitHub } from '@mui/icons-material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => {
  return (
    <Box component="footer" bgcolor="#FFF3F4" color="#3A1212" mt="80px" pt="50px" pb="25px">
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          
          {/* Coluna 1: Sobre a Plataforma */}
          <Grid item xs={12} md={4}>
            <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <img src={Logo} alt="Logo Fitness App" style={{ width: '150px' }} />
              <Typography variant="body2" color="#505050" textAlign={{ xs: 'center', md: 'left' }} fontSize="13px">
                Sua plataforma definitiva para treinos, exercícios detalhados e vídeos explicativos. Transforme sua rotina e alcance seus objetivos com alta performance.
              </Typography>
              {/* Redes Sociais */}
              <Stack direction="row" spacing={1}>
                <IconButton href="https://instagram.com" target="_blank" sx={{ color: '#3A1212' }}>
                  <Instagram fontSize="small" />
                </IconButton>
                <IconButton href="https://youtube.com" target="_blank" sx={{ color: '#3A1212' }}>
                  <YouTube fontSize="small" />
                </IconButton>
                <IconButton href="https://facebook.com" target="_blank" sx={{ color: '#3A1212' }}>
                  <Facebook fontSize="small" />
                </IconButton>
                <IconButton href="https://github.com" target="_blank" sx={{ color: '#3A1212' }}>
                  <GitHub fontSize="small" />
                </IconButton>
              </Stack>
            </Stack>
          </Grid>

          {/* Coluna 2: Navegação Rápida */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" mb={1.5} color="#3A1212">
              Navegação
            </Typography>
            <Stack spacing={0.8}>
              <Link href="/" color="#505050" underline="hover" fontSize="13px">Início</Link>
              <Link href="#exercises" color="#505050" underline="hover" fontSize="13px">Exercícios</Link>
              <Link href="#equipment" color="#505050" underline="hover" fontSize="13px">Equipamentos</Link>
              <Link href="#bodyParts" color="#505050" underline="hover" fontSize="13px">Grupos Musculares</Link>
            </Stack>
          </Grid>

          {/* Coluna 3: Recursos e Suporte */}
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" fontWeight="bold" mb={1.5} color="#3A1212">
              Recursos
            </Typography>
            <Stack spacing={0.8}>
              <Link href="#" color="#505050" underline="hover" fontSize="13px">Dicas de Treino</Link>
              <Link href="#" color="#505050" underline="hover" fontSize="13px">Guias em Vídeo</Link>
              <Link href="#" color="#505050" underline="hover" fontSize="13px">Termos de Uso</Link>
              <Link href="#" color="#505050" underline="hover" fontSize="13px">Política de Privacidade</Link>
            </Stack>
          </Grid>

          {/* Coluna 4: Contato */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="subtitle1" fontWeight="bold" mb={1.5} color="#3A1212">
              Contato
            </Typography>
            <Typography variant="body2" color="#505050" mb={1} fontSize="13px">
              Dúvidas ou sugestões? Fale conosco:
            </Typography>
            <Typography variant="body2" color="#3A1212" fontWeight="bold" fontSize="13px">
              suporte@fitnessapp.com
            </Typography>
          </Grid>

        </Grid>

        {/* Linha Divisória */}
        <Divider sx={{ my: 3, borderColor: '#FF26251A' }} />

        {/* Rodapé Inferior: Copyright */}
        <Stack 
          direction={{ xs: 'column', sm: 'row' }} 
          justifyContent="space-between" 
          alignItems="center" 
          spacing={2}
        >
          <Typography variant="caption" color="#707070">
            © {new Date().getFullYear()} Fitness App. Todos os direitos reservados.
          </Typography>
          <Typography variant="caption" color="#707070">
            Desenvolvido por <span style={{ fontWeight: 'bold', color: '#3A1212' }}>Davi Saldanha</span>
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;