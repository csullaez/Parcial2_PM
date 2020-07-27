using System;
using System.ComponentModel;
using System.Drawing;
using System.Windows.Forms;
using Emgu.CV;
using Emgu.CV.CvEnum;
using Emgu.CV.Structure;

namespace Tratamiento_Imagenes
{
    public partial class Form1 : Form
    {
        Color colorAuxiliar= new Color();
        Image<Bgr, byte> _imgInput;
        Bitmap bmp,bmp2;
        int i, j, r, g, b, w, h;
        int[,] HorizontalR;
        int[,] HorizontalG;
        int[,] HorizontalB;
        int[,] VerticalR;
        int[,] VerticalG;
        int[,] VerticalB;
        int[,] rojo;
        int[,] verde;
        int[,] azul;
        int[] a;
        public Form1()
        {
            InitializeComponent();
        }

        private void openFileDialog1_FileOk(object sender, CancelEventArgs e)
        {
        }
        private void button1_Click(object sender, EventArgs e)
        {
            openFileDialog1.Filter = "Archivos JPG|*.jpg|Todos los archivos|*.*";
            openFileDialog1.ShowDialog();
            bmp = new Bitmap(openFileDialog1.FileName);
            _imgInput = new Image<Bgr, byte>(openFileDialog1.FileName);
            pictureBox1.Image = bmp;
            h = bmp.Height;
            w = bmp.Width;
            rojo = new int[w,h];
            verde = new int[w,h];
            azul = new int[w,h];
            HorizontalR = new int[w, h];
            HorizontalG = new int[w,h];
            HorizontalB = new int[w,h];
            VerticalR = new int[w,h];
            VerticalG = new int[w,h];
            VerticalB = new int[w, h];
            a = new int[(this.w * this.h)];
            for (i = 0; i < bmp.Width; i++)
            {
                for (j = 0; j < bmp.Height; j++)
                {
                    colorAuxiliar = bmp.GetPixel(i,j);

                    rojo[i,j] = (int)colorAuxiliar.R;
                    verde[i,j] = (int)colorAuxiliar.G;
                    azul[i,j] = (int)colorAuxiliar.B;
                    
                }
            }
   
        }
        private void button2_Click(object sender, EventArgs e)
        {
            bmp2 = new Bitmap(bmp.Width, bmp.Height);
            for (i = 0; i < bmp.Width - 1; i++)
            {
                for (j = 0; j < bmp.Height-1; j++)
                {
                    HorizontalR[i, j] = Math.Abs((rojo[i + 1, j] - rojo[i, j]));
                    HorizontalG[i, j] = Math.Abs((verde[i + 1, j] - verde[i, j]));
                    HorizontalB[i, j] = Math.Abs((azul[i + 1, j] - azul[i, j]));
                    bmp2.SetPixel(i, j, Color.FromArgb(HorizontalR[i, j], HorizontalG[i, j], HorizontalB[i, j]));
                    VerticalR[i,j] = Math.Abs((rojo[i,j + 1] - rojo[i,j]));
                    VerticalG[i,j] = Math.Abs((verde[i,j + 1] - verde[i,j]));
                    VerticalB[i,j] = Math.Abs((azul[i,j + 1] - azul[i,j]));
                    bmp2.SetPixel(i, j, Color.FromArgb(VerticalR[i, j], VerticalG[i, j], VerticalB[i, j]));
                    /*int[] Recibegris = histograma();
                    CalculaUmbral cal = new CalculaUmbral();
                    int a = cal.CalcularUmbral(Recibegris);
                    Umbralizacion(a);*/
                }
            }
            pictureBox1.Image = bmp2;
        }
        public void Umbralizacion(int umbral)
        {
            int aux;
            for (i = 1; i < bmp2.Width; i++)
            {
                for (j = 1; j < bmp2.Height; j++)
                {
                    colorAuxiliar = bmp2.GetPixel(i, j);
                    aux = ConvierteGris(colorAuxiliar);
                    if (aux > umbral)
                        bmp2.SetPixel(i, j, Color.FromArgb(0,0,0));
                    else
                        bmp2.SetPixel(i, j, Color.FromArgb(255, 255, 255));
                }
            }
        }
        public int ConvierteGris(Color color)
        {
            int mediaColor;
            mediaColor = (int)(.3 * (color.R) + .59 * (color.G) + .11 * (color.B));
            return mediaColor;
        }
        public int[] histograma()
        {
            int[] histogramaReturn = new int[256];

            //Recorremos la imagen
            for (i = 0; i < bmp2.Width; i++)
            {
                for (j = 0; j < bmp2.Height; j++)
                {
                    //Obtenemos color del píxel actual
                    colorAuxiliar = bmp2.GetPixel(i, j);
                    histogramaReturn[ConvierteGris(colorAuxiliar)] += 1;
                }
            }
            return histogramaReturn;
        }
    }
    public class CalculaUmbral
    {
        int media, anterior, siguiente;
        double PrimeraMitad, SegundaMitad;
        public int CalcularUmbral(int[] histograma)
        {
            media = histograma.Length / 2;//punto inicial
            anterior = -1;
            siguiente = media;
            PrimeraMitad = 0.0;
            SegundaMitad = 0.0;
            do
            {
                anterior = siguiente;
                //Calcula el promedio para la primera mitad
                PrimeraMitad = CalcularMedio(histograma, 0, siguiente);
                //Calcula el promedio para la segunda mitad
                SegundaMitad = CalcularMedio(histograma, siguiente, histograma.Length);
                if (PrimeraMitad == 0.0)
                {//ajuste de valores en caso de no existir pixeles en alguna de las mitades
                    PrimeraMitad = SegundaMitad;
                }
                if (SegundaMitad == 0.0)
                {
                    SegundaMitad = PrimeraMitad;
                }
                //El valor del umbral se calcula como el promedio
                //de los valores para los promedios de cada mitad

                siguiente = (int)((PrimeraMitad + SegundaMitad) * 0.5);
            } while (anterior != siguiente);

            return siguiente;
        }//fin metodo

        public double CalcularMedio(int[] histograma, int inicio, int fin)
        {
            int n = 0;
            int sum = 0;
            for (int i = inicio; i < fin; i++)
            {
                sum += (i * histograma[i]);//acumula valores freq(i)*n;
                n += histograma[i];//contando la cantidad de pixeles
            }//fin for
            if (n == 0)
            {//si erango no se encontro se regresa 0
                return 0.0;
            }
            return (((double)sum) / ((double)n));//promedio aritmetico   
        }//fin calcula medio
    }//fin clase
}
