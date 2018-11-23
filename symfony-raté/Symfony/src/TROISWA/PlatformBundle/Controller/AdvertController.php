<?php

namespace TROISWA\PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;

class AdvertController extends Controller
{
    public function indexAction($id, $name)
    {	
    	$url = $this->get('router')->generate(
            'troiswa_platform_homepage', ['id' => $id, 'name' => $name], UrlGeneratorInterface::ABSOLUTE_URL);
            
            var_dump($url);
        
        $tab = ['a', 'b', 'c'];
    	

    	$content = $this->get('templating')->render('TROISWAPlatformBundle:Advert:index.html.twig', ["nom" => $name, 'id' => $id, 'tab' => $tab]);

        return new Response($content);

    }
    
}



?>